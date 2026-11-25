import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useLang, useLangStore } from '@/lib/i18n';
import type { Lang } from '@/lib/types';

const options: { code: Lang; label: string; name: string }[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'vi', label: 'VI', name: 'Tiếng Việt' },
];

export function LanguageSwitch() {
  const lang = useLang();
  const setLang = useLangStore((s) => s.setLang);

  return (
    <View
      className="flex-row rounded-full bg-slate-800 border border-slate-600 p-0.5 mr-2"
      accessibilityRole="radiogroup"
    >
      {options.map((option) => {
        const active = option.code === lang;
        return (
          <Pressable
            key={option.code}
            onPress={() => setLang(option.code)}
            accessibilityRole="radio"
            accessibilityLabel={option.name}
            accessibilityState={{ selected: active }}
            className={
              active
                ? 'px-3 py-2 rounded-full bg-amber-400'
                : 'px-3 py-2 rounded-full'
            }
          >
            <Text
              className={
                active
                  ? 'text-slate-900 text-[13px] font-bold'
                  : 'text-slate-200 text-[13px] font-semibold'
              }
            >
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
