import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import {
  ArrowLeft,
  Star,
  Moon,
  Hexagon,
  Heart,
  Brain,
  Compass,
  MessageCircle,
  Sparkles,
  Users,
  AlertTriangle,
  Flame,
  Zap,
  Shield,
  User,
} from 'lucide-react-native';
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withTiming,
  FadeInDown,
  FadeIn,
} from 'react-native-reanimated';
import { frameworks, getGenderedCompatibilityResult } from '@/lib/data';
import { PersonalityType } from '@/lib/types';

const iconMap: Record<string, React.ComponentType<{ size: number; color: string }>> = {
  Star,
  Moon,
  Hexagon,
  Heart,
  Brain,
  Compass,
};

function TypeSelector({
  types,
  selectedType,
  onSelect,
  color,
  label,
  genderLabel,
}: {
  types: PersonalityType[];
  selectedType: string | null;
  onSelect: (id: string) => void;
  color: string;
  label: string;
  genderLabel: string;
}) {
  return (
    <View className="mb-4">
      <View className="flex-row items-center mb-3">
        <View
          className="w-6 h-6 rounded-full items-center justify-center mr-2"
          style={{ backgroundColor: `${color}30` }}
        >
          <User size={14} color={color} />
        </View>
        <Text className="text-white font-semibold">{genderLabel}</Text>
        <Text className="text-slate-400 text-sm ml-2">- {label}</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20 }}
        style={{ flexGrow: 0 }}
      >
        {types.map((type) => {
          const isSelected = selectedType === type.id;
          return (
            <Pressable
              key={type.id}
              onPress={() => onSelect(type.id)}
              className="mr-2"
            >
              <View
                className="px-4 py-3 rounded-xl border-2"
                style={{
                  backgroundColor: isSelected ? `${color}20` : '#1e293b',
                  borderColor: isSelected ? color : '#334155',
                  minWidth: 90,
                }}
              >
                <Text
                  className="text-center font-semibold"
                  style={{ color: isSelected ? color : '#94a3b8' }}
                >
                  {type.symbol || type.name.charAt(0)}
                </Text>
                <Text
                  className="text-center text-xs mt-1"
                  style={{ color: isSelected ? '#f8fafc' : '#64748b' }}
                  numberOfLines={1}
                >
                  {type.name.split(' - ')[0]}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

function ScoreRing({ score, color }: { score: number; color: string }) {
  const rotation = React.useRef(0);

  const animatedStyle = useAnimatedStyle(() => {
    rotation.current = withRepeat(
      withTiming(360, { duration: 20000 }),
      -1,
      false
    );
    return {
      transform: [{ rotate: `${rotation.current}deg` }],
    };
  });

  return (
    <View className="items-center justify-center">
      <Animated.View
        style={[
          {
            width: 140,
            height: 140,
            borderRadius: 70,
            borderWidth: 4,
            borderColor: `${color}30`,
            position: 'absolute',
          },
          animatedStyle,
        ]}
      />
      <View
        className="w-32 h-32 rounded-full items-center justify-center border-4"
        style={{
          borderColor: color,
          backgroundColor: `${color}15`,
        }}
      >
        <Text className="text-4xl font-bold" style={{ color }}>
          {score}
        </Text>
        <Text className="text-slate-400 text-sm">Compatibility</Text>
      </View>
    </View>
  );
}

function InsightSection({
  title,
  icon: Icon,
  items,
  iconColor,
  delay = 0,
}: {
  title: string;
  icon: React.ComponentType<{ size: number; color: string }>;
  items: string[];
  iconColor: string;
  delay?: number;
}) {
  return (
    <Animated.View
      entering={FadeInDown.delay(delay).duration(500)}
      className="mb-5"
    >
      <View className="flex-row items-center mb-3">
        <View
          className="rounded-full p-2 mr-2"
          style={{ backgroundColor: `${iconColor}20` }}
        >
          <Icon size={18} color={iconColor} />
        </View>
        <Text className="text-white font-semibold text-lg">{title}</Text>
      </View>
      <View className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
        {items.map((item, index) => (
          <View key={index} className="flex-row items-start mb-3 last:mb-0">
            <View
              className="w-2 h-2 rounded-full mt-2 mr-3"
              style={{ backgroundColor: iconColor }}
            />
            <Text className="text-slate-300 flex-1 text-sm leading-6">
              {item}
            </Text>
          </View>
        ))}
      </View>
    </Animated.View>
  );
}

export default function CompatibilityScreen() {
  const router = useRouter();
  const { frameworkId, yourType: initialYourType } = useLocalSearchParams<{
    frameworkId: string;
    yourType?: string;
  }>();

  const [hisType, setHisType] = useState<string | null>(null);
  const [herType, setHerType] = useState<string | null>(initialYourType || null);

  const framework = frameworks.find((f) => f.id === frameworkId);

  const compatibility = useMemo(() => {
    if (!framework || !hisType || !herType) return null;
    return getGenderedCompatibilityResult(framework, hisType, herType);
  }, [framework, hisType, herType]);

  if (!framework) {
    return (
      <View className="flex-1 bg-slate-900 items-center justify-center">
        <Text className="text-white">Framework not found</Text>
      </View>
    );
  }

  const Icon = iconMap[framework.icon] || Star;
  const hisPersonality = framework.types.find((t) => t.id === hisType);
  const herPersonality = framework.types.find((t) => t.id === herType);

  return (
    <View className="flex-1 bg-slate-900">
      <LinearGradient
        colors={[framework.gradient[0] + '30', '#0f172a', '#0f172a']}
        style={{ flex: 1 }}
      >
        <SafeAreaView className="flex-1" edges={['top']}>
          {/* Header */}
          <Animated.View
            entering={FadeIn.duration(400)}
            className="px-4 py-3 flex-row items-center"
          >
            <Pressable
              onPress={() => router.back()}
              className="w-10 h-10 rounded-full bg-slate-800/80 items-center justify-center mr-3"
            >
              <ArrowLeft size={22} color="#f8fafc" />
            </Pressable>
            <View className="flex-1">
              <Text className="text-white text-xl font-bold">
                His & Hers Compatibility
              </Text>
              <Text className="text-slate-400 text-sm">
                {framework.name}
              </Text>
            </View>
            <View
              className="w-10 h-10 rounded-full items-center justify-center"
              style={{ backgroundColor: `${framework.color}30` }}
            >
              <Icon size={22} color={framework.color} />
            </View>
          </Animated.View>

          <ScrollView
            className="flex-1"
            contentContainerStyle={{ paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Gender Info Box */}
            <Animated.View
              entering={FadeInDown.delay(50).duration(400)}
              className="px-5 pt-2 pb-4"
            >
              <View className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/50">
                <Text className="text-slate-300 text-sm leading-5">
                  Select his type and her type below. Gender affects how personality traits are expressed - the same sign can manifest differently in men and women.
                </Text>
              </View>
            </Animated.View>

            {/* Type Selectors */}
            <View className="px-5">
              <TypeSelector
                types={framework.types}
                selectedType={hisType}
                onSelect={setHisType}
                color="#3b82f6"
                label="Select his type"
                genderLabel="His"
              />
              <TypeSelector
                types={framework.types}
                selectedType={herType}
                onSelect={setHerType}
                color="#ec4899"
                label="Select her type"
                genderLabel="Hers"
              />
            </View>

            {/* Compatibility Results */}
            {compatibility && hisPersonality && herPersonality && (
              <Animated.View
                entering={FadeIn.duration(600)}
                className="px-5 mt-4"
              >
                {/* Score Display */}
                <Animated.View
                  entering={FadeInDown.delay(100).duration(500)}
                  className="mb-6"
                >
                  <LinearGradient
                    colors={['#1e293b', '#0f172a']}
                    style={{
                      borderRadius: 24,
                      padding: 24,
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#334155',
                    }}
                  >
                    <View className="flex-row items-center justify-center mb-4">
                      <View className="items-center">
                        <View
                          className="w-14 h-14 rounded-full items-center justify-center"
                          style={{ backgroundColor: '#3b82f620' }}
                        >
                          <Text className="text-xl font-bold text-blue-400">
                            {hisPersonality.symbol ||
                              hisPersonality.name.charAt(0)}
                          </Text>
                        </View>
                        <Text className="text-blue-400 text-xs mt-2 font-medium">His</Text>
                      </View>
                      <View className="mx-4">
                        <Zap size={24} color="#fbbf24" />
                      </View>
                      <View className="items-center">
                        <View
                          className="w-14 h-14 rounded-full items-center justify-center"
                          style={{ backgroundColor: '#ec489920' }}
                        >
                          <Text className="text-xl font-bold text-pink-400">
                            {herPersonality.symbol ||
                              herPersonality.name.charAt(0)}
                          </Text>
                        </View>
                        <Text className="text-pink-400 text-xs mt-2 font-medium">Hers</Text>
                      </View>
                    </View>
                    <ScoreRing
                      score={compatibility.overallScore}
                      color={framework.color}
                    />
                    <Text className="text-slate-400 text-sm mt-4 text-center">
                      {hisPersonality.name} + {herPersonality.name}
                    </Text>
                  </LinearGradient>
                </Animated.View>

                {/* His Insights */}
                <InsightSection
                  title="Understanding Him"
                  icon={User}
                  items={compatibility.hisInsights}
                  iconColor="#3b82f6"
                  delay={150}
                />

                {/* Her Insights */}
                <InsightSection
                  title="Understanding Her"
                  icon={User}
                  items={compatibility.herInsights}
                  iconColor="#ec4899"
                  delay={200}
                />

                {/* Strengths */}
                <InsightSection
                  title="Connection Strengths"
                  icon={Shield}
                  items={compatibility.strengths}
                  iconColor="#4ade80"
                  delay={250}
                />

                {/* Communication Tips */}
                <InsightSection
                  title="Communication Tips"
                  icon={MessageCircle}
                  items={compatibility.communicationTips}
                  iconColor={framework.color}
                  delay={300}
                />

                {/* As Lovers */}
                <InsightSection
                  title="As Lovers"
                  icon={Flame}
                  items={compatibility.loverInsights}
                  iconColor="#f472b6"
                  delay={350}
                />

                {/* Challenges */}
                <InsightSection
                  title="Potential Challenges"
                  icon={AlertTriangle}
                  items={compatibility.challenges}
                  iconColor="#fbbf24"
                  delay={400}
                />

                {/* Intimacy Insights */}
                <InsightSection
                  title="Intimacy Insights"
                  icon={Heart}
                  items={compatibility.intimacyInsights}
                  iconColor="#ec4899"
                  delay={450}
                />

                {/* Tips Box */}
                <Animated.View
                  entering={FadeInDown.delay(500).duration(500)}
                  className="mt-2"
                >
                  <View className="bg-amber-500/10 rounded-2xl p-5 border border-amber-500/30">
                    <View className="flex-row items-center mb-2">
                      <Sparkles size={18} color="#fbbf24" />
                      <Text className="text-amber-400 font-semibold ml-2">
                        Remember
                      </Text>
                    </View>
                    <Text className="text-slate-300 text-sm leading-6">
                      These insights reflect general patterns of how men and women express their personality types. Every individual is unique - use these as a starting point for deeper understanding, not rigid rules.
                    </Text>
                  </View>
                </Animated.View>
              </Animated.View>
            )}

            {/* Empty State */}
            {(!hisType || !herType) && (
              <Animated.View
                entering={FadeIn.duration(500)}
                className="px-5 mt-8 items-center"
              >
                <View className="bg-slate-800/50 rounded-2xl p-8 items-center border border-slate-700/50">
                  <View className="flex-row mb-4">
                    <View
                      className="w-16 h-16 rounded-full items-center justify-center mr-2"
                      style={{ backgroundColor: '#3b82f620' }}
                    >
                      <User size={28} color="#3b82f6" />
                    </View>
                    <View
                      className="w-16 h-16 rounded-full items-center justify-center ml-2"
                      style={{ backgroundColor: '#ec489920' }}
                    >
                      <User size={28} color="#ec4899" />
                    </View>
                  </View>
                  <Text className="text-white font-semibold text-lg text-center">
                    Select His & Her Types
                  </Text>
                  <Text className="text-slate-400 text-sm text-center mt-2">
                    Choose his type (blue) and her type (pink) above to see gender-specific compatibility insights.
                  </Text>
                </View>
              </Animated.View>
            )}
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
