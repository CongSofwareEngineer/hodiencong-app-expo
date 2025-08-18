import { KEY_CHAIN } from "@/constants/keyChain"
import { getSecureData } from "@/utils/secureStorage"
import { languageZustand } from "@/zustand/language"
import { modeZustand } from "@/zustand/mode"
import { ReactNode, useLayoutEffect } from "react"

const PreLoadData = ({ children }: { children: ReactNode }) => {
  const { language } = languageZustand(state => state)
  const { mode } = modeZustand(state => state)



  useLayoutEffect(() => {
    const getData = async () => {
      console.log({ language, mode });
      const token = await getSecureData(KEY_CHAIN.Token)
      console.log({ token });


    }
    getData()

  }, [language, mode])


  return (
    children
  )
}

export default PreLoadData