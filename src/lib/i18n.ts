import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ui, UiKey } from './strings';
import type { Lang } from './types';

type LangState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

// The chosen language is remembered on the device (localStorage on the web).
export const useLangStore = create<LangState>()(
  persist(
    (set) => ({
      lang: 'en',
      setLang: (lang) => set({ lang }),
    }),
    {
      name: 'compatibility-talk-language',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ lang: state.lang }),
    }
  )
);

export function useLang(): Lang {
  return useLangStore((s) => s.lang);
}

export type Translate = (key: UiKey, vars?: Record<string, string | number>) => string;

export function useT(): Translate {
  const lang = useLang();
  return (key, vars) => {
    let text: string = ui[lang][key];
    if (vars) {
      for (const name of Object.keys(vars)) {
        text = text.split(`{${name}}`).join(String(vars[name]));
      }
    }
    return text;
  };
}
