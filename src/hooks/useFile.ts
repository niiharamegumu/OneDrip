import { useState, ChangeEvent } from 'react'

export const useFile = () => {
  const [file, setFile] = useState<File | null>(null)

  const changeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target
    const files = target.files as FileList | null
    if (files) {
      setFile(files[0])
    }
  }

  return { file, changeFile }
}
