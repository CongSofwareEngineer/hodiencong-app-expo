import { KEY_STORAGE } from "@/constants/storage"
import { getDataLocal } from "@/utils/Storage"
import { languageZustand } from "@/zustand/language"
import { modeZustand } from "@/zustand/mode"
import { useLayoutEffect } from "react"

const PreLoadData = () => {
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
    <></>
  )
}

export default PreLoadData