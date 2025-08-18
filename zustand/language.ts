import { KEY_STORAGE } from '@/constants/storage'
import { getDataLocal, removeDataLocal, saveDataLocal } from '@/utils/Storage'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

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
    persist((set) => ({
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
    }), {
      storage: {
        getItem: () => {


          const local = getDataLocal(KEY_STORAGE.Language)
          if (local) {
            return {
              state: {
                language: {
                  locale: local,
                  messages: {}
                }
              }
            }
          }
          return null
        },
        removeItem: () => {
          removeDataLocal(KEY_STORAGE.Language)

        },
        setItem: (_, value) => {
          const locale = value.state.language.locale
          saveDataLocal(KEY_STORAGE.Language, locale)
        }
      },
      name: 'language-zustand',
    }),
    {
      name: 'language-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)