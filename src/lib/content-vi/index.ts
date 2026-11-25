import type { FrameworkTranslation } from '../types';
import { zodiacVi } from './zodiac';
import { chineseVi } from './chinese';
import { enneagramVi } from './enneagram';
import { lovelangVi } from './lovelang';
import { mbtiVi } from './mbti';
import { baziVi } from './bazi';

// Vietnamese text for each framework, keyed by framework id from data.ts.
export const contentVi: Record<string, FrameworkTranslation> = {
  zodiac: zodiacVi,
  chinese: chineseVi,
  enneagram: enneagramVi,
  lovelang: lovelangVi,
  mbti: mbtiVi,
  bazi: baziVi,
};
