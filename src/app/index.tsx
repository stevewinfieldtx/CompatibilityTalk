import React, { useEffect } from 'react';
import { View, Text, ScrollView, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Star, Moon, Hexagon, Heart, Brain, Compass, Sparkles, ChevronRight } from 'lucide-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
  FadeInDown,
  FadeIn,
} from 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen';
import { frameworks } from '@/lib/data';

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
  framework: (typeof frameworks)[0];
  index: number;
}) {
  const router = useRouter();
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
        <View className="mt-4">
          <Text className="text-white text-xl font-bold">{framework.name}</Text>
          <Text className="text-white/80 text-sm mt-1" numberOfLines={2}>
            {framework.types.length} types to explore
          </Text>
        </View>
      </LinearGradient>
    </AnimatedPressable>
  );
}

export default function HomeScreen() {
  const router = useRouter();

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
              <View className="flex-row items-center mb-2">
                <View className="bg-amber-400/20 rounded-full p-2 mr-2">
                  <Sparkles size={20} color="#fbbf24" />
                </View>
                <Text className="text-amber-400 text-sm font-medium">
                  Connection Guide
                </Text>
              </View>
              <Text className="text-white text-3xl font-bold">
                Understand & Connect
              </Text>
              <Text className="text-slate-400 text-base mt-2 leading-6">
                Discover how personality frameworks can help you communicate better and build deeper relationships.
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
                className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-4"
              >
                Choose a Framework
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
                  Each framework offers unique insights into how people think,
                  communicate, and connect. Tap any card to explore definitions,
                  communication tips, and compatibility insights.
                </Text>
              </View>
            </Animated.View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
