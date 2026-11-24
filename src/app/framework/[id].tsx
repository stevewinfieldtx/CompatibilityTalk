import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, Dimensions } from 'react-native';
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
  Check,
} from 'lucide-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  FadeInDown,
  FadeIn,
} from 'react-native-reanimated';
import { frameworks } from '@/lib/data';
import { PersonalityType } from '@/lib/types';

const iconMap: Record<string, React.ComponentType<{ size: number; color: string }>> = {
  Star,
  Moon,
  Hexagon,
  Heart,
  Brain,
  Compass,
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function TypeCard({
  type,
  onPress,
  color,
  index,
}: {
  type: PersonalityType;
  onPress: () => void;
  color: string;
  index: number;
}) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      entering={FadeInDown.delay(index * 50).duration(400)}
      style={animatedStyle}
      onPressIn={() => {
        scale.value = withSpring(0.95, { damping: 15 });
      }}
      onPressOut={() => {
        scale.value = withSpring(1, { damping: 15 });
      }}
      onPress={onPress}
      className="mb-3"
    >
      <LinearGradient
        colors={[`${color}20`, `${color}10`]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 16,
        }}
      >
        <View
          className="rounded-2xl p-4 border-2"
          style={{
            backgroundColor: 'transparent',
            borderColor: color,
          }}
        >
          <View className="flex-row items-center">
            <View
              className="w-12 h-12 rounded-full items-center justify-center mr-3"
              style={{ backgroundColor: `${color}30` }}
            >
              <Text
                className="text-lg font-bold"
                style={{ color: color }}
              >
                {type.symbol || type.name.charAt(0)}
              </Text>
            </View>
            <View className="flex-1">
              <Text
                className="font-semibold text-base"
                style={{ color: '#f8fafc' }}
              >
                {type.name}
              </Text>
              <Text className="text-slate-400 text-xs mt-0.5" numberOfLines={1}>
                {type.strengths.slice(0, 2).join(' • ')}
              </Text>
            </View>
            <View
              className="w-6 h-6 rounded-full items-center justify-center"
              style={{ backgroundColor: `${color}30` }}
            >
              <ArrowLeft size={14} color={color} style={{ transform: [{ rotate: '180deg' }] }} />
            </View>
          </View>
        </View>
      </LinearGradient>
    </AnimatedPressable>
  );
}

export default function FrameworkScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const framework = frameworks.find((f) => f.id === id);

  if (!framework) {
    return (
      <View className="flex-1 bg-slate-900 items-center justify-center">
        <Text className="text-white">Framework not found</Text>
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
            {/* Framework Description */}
            <Animated.View
              entering={FadeInDown.delay(100).duration(500)}
              className="px-5 py-4"
            >
              <View className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/50">
                <Text className="text-slate-300 text-sm leading-6">
                  {framework.description}
                </Text>
              </View>
            </Animated.View>

            {/* Type Selection */}
            <View className="px-5 mt-4">
              <Animated.View
                entering={FadeIn.delay(200).duration(400)}
                className="flex-row items-center justify-between mb-4"
              >
                <Text className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                  {framework.types.length} Types
                </Text>
              </Animated.View>

              {framework.types.map((type, index) => (
                <TypeCard
                  key={type.id}
                  type={type}
                  onPress={() =>
                    router.push(`/type/${framework.id}/${type.id}`)
                  }
                  color={framework.color}
                  index={index}
                />
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
