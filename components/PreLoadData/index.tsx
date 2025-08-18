import { KEY_STORAGE } from "@/constants/storage"
import { getDataLocal } from "@/utils/Storage"
import { languageZustand } from "@/zustand/language"
import { modeZustand } from "@/zustand/mode"
import { ReactNode, useLayoutEffect } from "react"

const PreLoadData = ({ children }: { children: ReactNode }) => {
  const { setLanguage } = languageZustand(state => state)
  const { setMode } = modeZustand(state => state)

  useLayoutEffect(() => {
    const getData = async () => {
      const [locale, mode] = await Promise.all([
        getDataLocal(KEY_STORAGE.Language),
        getDataLocal(KEY_STORAGE.Mode),
      ])
      if (locale) {
        setLanguage(locale)

      }

      if (mode) {
        setMode(mode)

      }

    }
    getData()

  }, [setMode, setLanguage])


  return (
    children
  )
}

export default PreLoadData