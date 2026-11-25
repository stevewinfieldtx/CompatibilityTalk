import React from 'react';
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
  Check,
  AlertTriangle,
  Flame,
} from 'lucide-react-native';
import Animated, {
  FadeInDown,
  FadeIn,
} from 'react-native-reanimated';
import { useFrameworks } from '@/lib/localize';
import { useT } from '@/lib/i18n';
import { LanguageSwitch } from '@/components/LanguageSwitch';

const iconMap: Record<string, React.ComponentType<{ size: number; color: string }>> = {
  Star,
  Moon,
  Hexagon,
  Heart,
  Brain,
  Compass,
};

function DetailSection({
  title,
  icon: Icon,
  children,
  color,
  delay = 0,
}: {
  title: string;
  icon: React.ComponentType<{ size: number; color: string }>;
  children: React.ReactNode;
  color: string;
  delay?: number;
}) {
  return (
    <Animated.View
      entering={FadeInDown.delay(delay).duration(500)}
      className="mb-6"
    >
      <View className="flex-row items-center mb-3">
        <View
          className="rounded-full p-2 mr-2"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon size={18} color={color} />
        </View>
        <Text className="text-white font-semibold text-lg">{title}</Text>
      </View>
      {children}
    </Animated.View>
  );
}

function BulletList({
  items,
  color,
  isPositive = true,
}: {
  items: string[];
  color: string;
  isPositive?: boolean;
}) {
  return (
    <View className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
      {items.map((item, index) => (
        <View key={index} className="flex-row items-start mb-2 last:mb-0">
          <View
            className="w-5 h-5 rounded-full items-center justify-center mr-3 mt-0.5"
            style={{
              backgroundColor: isPositive ? `${color}20` : '#fca5a520',
            }}
          >
            {isPositive ? (
              <Check size={12} color={color} />
            ) : (
              <AlertTriangle size={12} color="#fca5a5" />
            )}
          </View>
          <Text className="text-slate-300 flex-1 text-sm leading-5">{item}</Text>
        </View>
      ))}
    </View>
  );
}

export default function TypeDetailScreen() {
  const router = useRouter();
  const t = useT();
  const frameworks = useFrameworks();
  const { frameworkId, typeId } = useLocalSearchParams<{
    frameworkId: string;
    typeId: string;
  }>();

  const framework = frameworks.find((f) => f.id === frameworkId);
  const type = framework?.types.find((t) => t.id === typeId);

  if (!framework || !type) {
    return (
      <View className="flex-1 bg-slate-900 items-center justify-center">
        <Text className="text-white">{t('typeNotFound')}</Text>
      </View>
    );
  }

  const Icon = iconMap[framework.icon] || Star;

  return (
    <View className="flex-1 bg-slate-900">
      <LinearGradient
        colors={[framework.gradient[0] + '40', '#0f172a', '#0f172a']}
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
                {type.name}
              </Text>
              <Text className="text-slate-400 text-sm">
                {framework.name}
              </Text>
            </View>
            <LanguageSwitch />
            <View
              className="w-10 h-10 rounded-full items-center justify-center"
              style={{ backgroundColor: `${framework.color}30` }}
            >
              <Text className="text-lg font-bold" style={{ color: '#f8fafc' }}>
                {type.symbol || type.name.charAt(0)}
              </Text>
            </View>
          </Animated.View>

          <ScrollView
            className="flex-1"
            contentContainerStyle={{ paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Partnership Overview - Featured at Top */}
            {type.partnershipInsights && (
              <Animated.View
                entering={FadeInDown.delay(100).duration(500)}
                className="px-5 py-4"
              >
                <LinearGradient
                  colors={[`${framework.color}20`, `${framework.color}10`]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{ borderRadius: 16, padding: 16, borderWidth: 1, borderColor: `${framework.color}40` }}
                >
                  <View className="flex-row items-center mb-2">
                    <Sparkles size={18} color={framework.color} />
                    <Text className="text-white font-semibold text-base ml-2">
                      {t('asPartner')}
                    </Text>
                  </View>
                  <Text className="text-slate-100 text-sm leading-6">
                    {type.partnershipInsights}
                  </Text>
                </LinearGradient>
              </Animated.View>
            )}

            {/* Lover Overview */}
            {type.loverInsights && (
              <Animated.View
                entering={FadeInDown.delay(150).duration(500)}
                className="px-5 py-4"
              >
                <LinearGradient
                  colors={['#ec489920', '#ec489910']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{ borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#ec489940' }}
                >
                  <View className="flex-row items-center mb-2">
                    <Flame size={18} color="#ec4899" />
                    <Text className="text-white font-semibold text-base ml-2">
                      {t('asLover')}
                    </Text>
                  </View>
                  <Text className="text-slate-100 text-sm leading-6">
                    {type.loverInsights}
                  </Text>
                </LinearGradient>
              </Animated.View>
            )}

            {/* Definition */}
            <DetailSection
              title={t('definition')}
              icon={Sparkles}
              color={framework.color}
              delay={type.partnershipInsights ? 200 : 100}
            >
              <View className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <Text className="text-slate-300 text-sm leading-6">
                  {type.description}
                </Text>
              </View>
            </DetailSection>

            {/* Communication Style */}
            <DetailSection
              title={t('communicationStyle')}
              icon={MessageCircle}
              color={framework.color}
              delay={200}
            >
              <View className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <Text className="text-slate-300 text-sm leading-6">
                  {type.communicationStyle}
                </Text>
              </View>
            </DetailSection>

            {/* Strengths */}
            <DetailSection
              title={t('strengths')}
              icon={Star}
              color={framework.color}
              delay={300}
            >
              <BulletList
                items={type.strengths}
                color={framework.color}
                isPositive={true}
              />
            </DetailSection>

            {/* Challenges */}
            <DetailSection
              title={t('challenges')}
              icon={AlertTriangle}
              color="#fca5a5"
              delay={400}
            >
              <BulletList
                items={type.challenges}
                color={framework.color}
                isPositive={false}
              />
            </DetailSection>

            {/* Compatibility Button */}
            <View className="px-5">
              <Animated.View entering={FadeInDown.delay(500).duration(500)}>
                <Pressable
                  onPress={() =>
                    router.push(
                      `/compatibility/${framework.id}?yourType=${typeId}`
                    )
                  }
                >
                  <LinearGradient
                    colors={[framework.gradient[0], framework.gradient[1]]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                      borderRadius: 16,
                      padding: 18,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Users size={22} color="#ffffff" />
                    <Text className="text-white font-bold text-base ml-3">
                      {t('checkCompat')}
                    </Text>
                  </LinearGradient>
                </Pressable>
              </Animated.View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
