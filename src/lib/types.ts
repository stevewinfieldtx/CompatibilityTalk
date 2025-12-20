export interface PersonalityType {
  id: string;
  name: string;
  symbol?: string;
  description: string;
  communicationStyle: string;
  strengths: string[];
  challenges: string[];
  partnershipInsights?: string;
  loverInsights?: string;
  maleTraits?: string[];
  femaleTraits?: string[];
}

export interface Framework {
  id: string;
  name: string;
  icon: string;
  color: string;
  gradient: [string, string];
  description: string;
  types: PersonalityType[];
}

export type Gender = 'male' | 'female';

export interface CompatibilityResult {
  overallScore: number;
  communicationTips: string[];
  intimacyInsights: string[];
  loverInsights: string[];
  challenges: string[];
  strengths: string[];
  hisInsights: string[];
  herInsights: string[];
}
