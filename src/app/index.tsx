import React, { useEffect } from 'react';
import { View, Text, ScrollView, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Star, Moon, Hexagon, Heart, Brain, Compass, Sparkles, ChevronRight, BookOpen } from 'lucide-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
  FadeInDown,
  FadeIn,
} from 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen';
import { useFrameworks } from '@/lib/localize';
import { useT } from '@/lib/i18n';
import { LanguageSwitch } from '@/components/LanguageSwitch';
import type { Framework } from '@/lib/types';

const { width } = Dimensions.get('window');

const iconMap: Record<string, React.ComponentType<{ size: number; color: string }>> = {
  Star,
  Moon,
  Hexagon,
  Heart,
  Brain,
  Compass,
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function FrameworkCard({
  framework,
  index,
}: {
  framework: Framework;
  index: number;
}) {
  const router = useRouter();
  const t = useT();
  const scale = useSharedValue(1);

  const Icon = iconMap[framework.icon] || Star;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.97, { damping: 15 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15 });
  };

  return (
    <AnimatedPressable
      entering={FadeInDown.delay(index * 100).duration(500).springify()}
      style={animatedStyle}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => router.push(`/framework/${framework.id}`)}
      className="mb-4"
    >
      <LinearGradient
        colors={[framework.gradient[0], framework.gradient[1]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 20,
          padding: 20,
          minHeight: 140,
        }}
      >
        <View className="flex-row items-start justify-between">
          <View className="bg-white/20 rounded-full p-3">
            <Icon size={28} color="#ffffff" />
          </View>
          <View className="bg-white/10 rounded-full p-2">
            <ChevronRight size={20} color="#ffffff" />
          </View>
        </View>
        <View className="mt-4 flex-row items-end justify-between">
          <View className="flex-1 mr-3">
            <Text className="text-white text-xl font-bold">{framework.name}</Text>
            <Text className="text-white text-sm mt-1" numberOfLines={2}>
              {t('typesToExplore', { n: framework.types.length })}
            </Text>
          </View>
          <Pressable
            onPress={() => router.push(`/about/${framework.id}`)}
            accessibilityRole="button"
            accessibilityLabel={`${t('whatIsIt')} ${framework.name}`}
            className="flex-row items-center bg-black/35 rounded-full px-4 py-2.5"
          >
            <BookOpen size={16} color="#ffffff" />
            <Text className="text-white text-sm font-semibold ml-2">
              {t('whatIsIt')}
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </AnimatedPressable>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const t = useT();
  const frameworks = useFrameworks();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <View className="flex-1 bg-slate-900">
      <LinearGradient
        colors={['#1e1b4b', '#0f172a', '#0f172a']}
        style={{ flex: 1 }}
      >
        <SafeAreaView className="flex-1" edges={['top']}>
          <ScrollView
            className="flex-1"
            contentContainerStyle={{ paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Header */}
            <Animated.View
              entering={FadeIn.delay(100).duration(600)}
              className="px-6 pt-6 pb-4"
            >
              <View className="flex-row items-center justify-between mb-2">
                <View className="flex-row items-center flex-1">
                  <View className="bg-amber-400/20 rounded-full p-2 mr-2">
                    <Sparkles size={20} color="#fbbf24" />
                  </View>
                  <Text className="text-amber-400 text-sm font-semibold">
                    {t('appName')}
                  </Text>
                </View>
                <LanguageSwitch />
              </View>
              <Text className="text-white text-3xl font-bold">
                {t('homeTitle')}
              </Text>
              <Text className="text-slate-300 text-base mt-2 leading-6">
                {t('homeSubtitle')}
              </Text>
            </Animated.View>

            {/* Decorative Elements */}
            <Animated.View
              entering={FadeIn.delay(200).duration(800)}
              className="absolute top-20 right-6 opacity-20"
            >
              <Star size={60} color="#fbbf24" />
            </Animated.View>

            {/* Framework Cards */}
            <View className="px-6 mt-4">
              <Animated.Text
                entering={FadeIn.delay(300).duration(500)}
                className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-4"
              >
                {t('chooseFramework')}
              </Animated.Text>
              {frameworks.map((framework, index) => (
                <FrameworkCard
                  key={framework.id}
                  framework={framework}
                  index={index}
                />
              ))}
            </View>

            {/* Bottom Info */}
            <Animated.View
              entering={FadeInDown.delay(600).duration(500)}
              className="px-6 mt-6"
            >
              <View className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/50">
                <Text className="text-slate-300 text-sm leading-5">
                  {t('homeInfo')}
                </Text>
              </View>
            </Animated.View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
