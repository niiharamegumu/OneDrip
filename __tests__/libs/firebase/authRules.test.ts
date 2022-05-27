import * as fs from 'fs'
import * as ftest from '@firebase/rules-unit-testing'
import { assertFails, assertSucceeds } from '@firebase/rules-unit-testing'
import { collection, doc, getDoc, getDocs, query, setDoc, setLogLevel } from 'firebase/firestore'
import { v4 } from 'uuid'

const projectId = v4()
const uid = v4()
// const itemId = v4()
let testEnv: ftest.RulesTestEnvironment

// white user listの取得
const whiteUserId = process.env.LOCAL_FIRESTORE_RULES_WHITE_LIST!

// LogLevelを設定
setLogLevel('error')

// 開始前にProject環境を作成
beforeAll(async () => {
  testEnv = await ftest.initializeTestEnvironment({
    projectId,
    firestore: {
      rules: fs.readFileSync('./firestore.rules', 'utf8'),
      port: 8080,
      host: 'localhost',
    },
  })
})

// それぞれの確認後、Firestore データベースのデータをクリア
beforeEach(async () => await testEnv.clearFirestore())
// 全部完了後、RulesTestContexts を破棄
afterAll(async () => await testEnv.cleanup())

const getDB = () => {
  // 認証済みホワイトユーザーを登録
  const whiteAuthenticatedContext = testEnv.authenticatedContext(whiteUserId)
  const whiteClientDB = whiteAuthenticatedContext.firestore()

  // 認証済みユーザーを登録
  const authenticatedContext = testEnv.authenticatedContext(uid)
  const clientDB = authenticatedContext.firestore()

  // ゲストユーザーを登録
  const unauthenticatedContext = testEnv.unauthenticatedContext()
  const guestClientDB = unauthenticatedContext.firestore()
  return { whiteClientDB, clientDB, guestClientDB }
}

describe('【users】collection', () => {
  describe('Get', () => {
    describe('全ユーザー取得不可', () => {
      it('get: Guestユーザー', async () => {
        const { guestClientDB } = getDB()
        await assertFails(getDoc(doc(guestClientDB, 'users', uid)))
      })
      it('get: Authユーザー', async () => {
        const { clientDB } = getDB()
        await assertFails(getDoc(doc(clientDB, 'users', uid)))
      })
      it('get: WhiteAuthユーザー', async () => {
        const { whiteClientDB } = getDB()
        await assertFails(getDoc(doc(whiteClientDB, 'users', whiteUserId)))
      })
    })
  })
  describe('Create', () => {
    describe('全ユーザー作成不可', () => {
      it('create: Guestユーザー', async () => {
        const { guestClientDB } = getDB()
        await assertFails(setDoc(doc(guestClientDB, 'users', uid), { name: 'sample name' }))
      })
      it('create: Authユーザー', async () => {
        const { clientDB } = getDB()
        await assertFails(setDoc(doc(clientDB, 'users', uid), { name: 'sample name' }))
      })
      it('create: WhiteAuthユーザー', async () => {
        const { whiteClientDB } = getDB()
        await assertFails(setDoc(doc(whiteClientDB, 'users', whiteUserId), { name: 'sample name' }))
      })
    })
  })
})

describe('【users/userid/items】collection', () => {
  describe('List', () => {
    beforeEach(async () => {
      await testEnv.withSecurityRulesDisabled(async (context) => {
        const noRuleDB = context.firestore()
        await setDoc(doc(noRuleDB, 'users', uid), { name: 'name' })
      })
    })

    describe('認証 && Whiteユーザーのみ取得可', () => {
      it('list: Guestユーザーは取得不可', async () => {
        const { guestClientDB } = getDB()
        const q = query(collection(guestClientDB, 'users', uid, 'items'))
        await assertFails(getDocs(q))
      })
      it('list: Authユーザーは取得不可', async () => {
        const { clientDB } = getDB()
        const q = query(collection(clientDB, 'users', uid, 'items'))
        await assertFails(getDocs(q))
      })
      it('list: Whiteユーザーは取得可', async () => {
        const { whiteClientDB } = getDB()
        const q = query(collection(whiteClientDB, 'users', whiteUserId, 'items'))
        await assertSucceeds(getDocs(q))
      })
    })
  })
})
