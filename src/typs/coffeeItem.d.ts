export type CoffeeItem = {
  id: string
  body: string
  img_url: string
  name: string
  status: 'active' | 'complete'
  createdAt: number
  updatedAt: number
  standardDate: number
  completedAt: number | null
  peek: {
    start: number
    end: number
  }
}
