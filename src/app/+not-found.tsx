import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!', headerShown: false }} />
      <LinearGradient
        colors={['#1e1b4b', '#0f172a']}
        style={{ flex: 1 }}
      >
        <View className="flex-1 items-center justify-center p-5">
          <Text className="text-xl font-bold text-white">
            This screen doesn't exist.
          </Text>

          <Link href="/" className="mt-4 py-4">
            <Text className="text-sm text-amber-400">Go to home screen</Text>
          </Link>
        </View>
      </LinearGradient>
    </>
  );
}
