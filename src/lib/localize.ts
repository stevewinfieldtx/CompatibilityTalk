import { useMemo } from 'react';
import { frameworks } from './data';
import { contentVi } from './content-vi';
import { useLang } from './i18n';
import type { Framework, Lang } from './types';

// Returns the frameworks in the chosen language. English is the base data in
// data.ts; Vietnamese overlays the translated text and keeps ids, symbols,
// colors and icons.
export function localizeFrameworks(lang: Lang): Framework[] {
  if (lang === 'en') return frameworks;
  return frameworks.map((fw) => {
    const tr = contentVi[fw.id];
    if (!tr) return fw;
    return {
      ...fw,
      name: tr.name,
      description: tr.description,
      types: fw.types.map((type) => {
        const trType = tr.types[type.id];
        return trType ? { ...type, ...trType } : type;
      }),
    };
  });
}

export function useFrameworks(): Framework[] {
  const lang = useLang();
  return useMemo(() => localizeFrameworks(lang), [lang]);
}
