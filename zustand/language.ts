import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

enum LANGUAGE_SUPPORT {
  VN = 'vn',
  EN = 'en'
}
type LanguageState = {
  language: {
    locale: LANGUAGE_SUPPORT
    messages: any
  }
  setLanguage: (locale: LANGUAGE_SUPPORT) => void
}
export const languageZustand = create<LanguageState>()(
  devtools(
    (set) => ({
      language: {
        locale: LANGUAGE_SUPPORT.VN,
        messages: {},
      },

      setLanguage: (locale: LANGUAGE_SUPPORT) => {


        set({
          language: {
            locale,
            messages: {}
          }
        })

      },
    }),
    {
      name: 'language-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)