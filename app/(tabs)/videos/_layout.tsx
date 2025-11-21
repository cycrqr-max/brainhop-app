import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import React from 'react';
import { Pressable, useColorScheme } from 'react-native';

type BackButtonProps = {
  color: string;
};

function BackButton({ color }: BackButtonProps) {
  const handlePress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/videos');
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={{ paddingHorizontal: 8 }}
      hitSlop={8}
    >
      <Ionicons name="chevron-back" size={24} color={color} />
    </Pressable>
  );
}

export default function VideosLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const headerBackground = isDark ? '#000000' : '#fff4e5';
  const headerTint = isDark ? '#ffffff' : '#111827';

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: headerBackground },
        headerTintColor: headerTint,
        headerTitleStyle: { color: headerTint },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="[day]"
        options={{
          title: 'Brainhop-Übungstag',
          headerLeft: () => <BackButton color={headerTint} />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="[day]/instructions"
        options={{
          title: 'Brainhop-Instruktionen',
          headerLeft: () => <BackButton color={headerTint} />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  );
}
