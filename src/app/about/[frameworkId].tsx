import React from 'react';
import { View, Text, ScrollView, Pressable, Linking } from 'react-native';
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
  BookOpen,
  Search,
  ExternalLink,
  ChevronRight,
} from 'lucide-react-native';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';
import { about } from '@/lib/about';
import { useFrameworks } from '@/lib/localize';
import { useLang, useT } from '@/lib/i18n';
import { LanguageSwitch } from '@/components/LanguageSwitch';

const iconMap: Record<string, React.ComponentType<{ size: number; color: string }>> = {
  Star,
  Moon,
  Hexagon,
  Heart,
  Brain,
  Compass,
};

function Section({
  title,
  icon: Icon,
  color,
  delay,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ size: number; color: string }>;
  color: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <Animated.View
      entering={FadeInDown.delay(delay).duration(500)}
      className="px-5 mb-6"
    >
      <View className="flex-row items-center mb-3">
        <View
          className="rounded-full p-2 mr-2"
          style={{ backgroundColor: `${color}25` }}
        >
          <Icon size={18} color={color} />
        </View>
        <Text className="text-white font-semibold text-lg flex-1">{title}</Text>
      </View>
      {children}
    </Animated.View>
  );
}

export default function AboutScreen() {
  const router = useRouter();
  const t = useT();
  const lang = useLang();
  const frameworks = useFrameworks();
  const { frameworkId } = useLocalSearchParams<{ frameworkId: string }>();

  const framework = frameworks.find((f) => f.id === frameworkId);
  const content = frameworkId ? about[frameworkId]?.[lang] : undefined;

  if (!framework || !content) {
    return (
      <View className="flex-1 bg-slate-900 items-center justify-center">
        <Text className="text-white">{t('aboutNotFound')}</Text>
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
              accessibilityRole="button"
              accessibilityLabel="Back"
            >
              <ArrowLeft size={22} color="#f8fafc" />
            </Pressable>
            <View className="flex-1">
              <Text className="text-white text-xl font-bold">
                {framework.name}
              </Text>
              <Text className="text-slate-300 text-sm">{t('whatIsIt')}</Text>
            </View>
            <LanguageSwitch />
            <View
              className="w-10 h-10 rounded-full items-center justify-center"
              style={{ backgroundColor: `${framework.color}30` }}
            >
              <Icon size={22} color={framework.color} />
            </View>
          </Animated.View>

          <ScrollView
            className="flex-1"
            contentContainerStyle={{ paddingBottom: 48, paddingTop: 8 }}
            showsVerticalScrollIndicator={false}
          >
            {/* What it is */}
            <Section
              title={t('aboutWhatItIs')}
              icon={BookOpen}
              color={framework.color}
              delay={100}
            >
              <View className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/50">
                {content.whatIs.map((paragraph, index) => (
                  <Text
                    key={index}
                    className="text-slate-200 text-base leading-7"
                    style={{ marginBottom: index === content.whatIs.length - 1 ? 0 : 14 }}
                  >
                    {paragraph}
                  </Text>
                ))}
              </View>
            </Section>

            {/* How to find your type */}
            <Section
              title={t('aboutFindType')}
              icon={Search}
              color={framework.color}
              delay={200}
            >
              <View className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/50">
                {content.howToFind.map((paragraph, index) => (
                  <Text
                    key={index}
                    className="text-slate-200 text-base leading-7"
                    style={{ marginBottom: index === content.howToFind.length - 1 && !content.table ? 0 : 14 }}
                  >
                    {paragraph}
                  </Text>
                ))}

                {content.table && (
                  <View className="mt-1">
                    <Text className="text-white font-semibold text-base mb-2">
                      {content.table.title}
                    </Text>
                    <View className="bg-slate-900/60 rounded-xl border border-slate-700/60">
                      {content.table.rows.map((row, index) => {
                        const split = row.indexOf(': ');
                        const label = split >= 0 ? row.slice(0, split) : row;
                        const value = split >= 0 ? row.slice(split + 2) : '';
                        return (
                          <View
                            key={index}
                            className="px-4 py-3 flex-row"
                            style={{
                              borderTopWidth: index === 0 ? 0 : 1,
                              borderTopColor: '#334155',
                            }}
                          >
                            <Text
                              className="font-semibold text-sm text-white"
                              style={{ width: 130 }}
                            >
                              {label}
                            </Text>
                            <Text className="text-slate-200 text-sm flex-1 leading-5">
                              {value}
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                )}
              </View>
            </Section>

            {/* Links */}
            <Section
              title={t('aboutLinks')}
              icon={ExternalLink}
              color={framework.color}
              delay={300}
            >
              {content.links.map((link) => (
                <Pressable
                  key={link.url}
                  onPress={() => Linking.openURL(link.url)}
                  accessibilityRole="link"
                  accessibilityLabel={`${link.label}. ${t('aboutOutside')}`}
                  className="mb-3"
                >
                  <View
                    className="rounded-2xl p-4 border-2 flex-row items-center"
                    style={{
                      borderColor: framework.color,
                      backgroundColor: `${framework.color}15`,
                    }}
                  >
                    <View className="flex-1 mr-3">
                      <Text className="text-white font-semibold text-base">
                        {link.label}
                      </Text>
                      <Text className="text-slate-200 text-sm mt-1 leading-5">
                        {link.note}
                      </Text>
                    </View>
                    <ExternalLink size={20} color={framework.color} />
                  </View>
                </Pressable>
              ))}
              <Text className="text-slate-300 text-sm mt-1">{t('aboutOutside')}</Text>
            </Section>

            {/* Go to the types */}
            <Animated.View
              entering={FadeInDown.delay(400).duration(500)}
              className="px-5"
            >
              <Pressable onPress={() => router.push(`/framework/${framework.id}`)}>
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
                  <Text className="text-white font-bold text-base mr-2">
                    {t('aboutSeeTypes')}
                  </Text>
                  <ChevronRight size={20} color="#ffffff" />
                </LinearGradient>
              </Pressable>
            </Animated.View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
