// app/(tabs)/videos/_layout.tsx
import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

function BackButton() {
  const handlePress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      // direct load / refresh → go back to list
      router.replace('/videos');
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={{ paddingHorizontal: 8 }}
      hitSlop={8}
    >
      <Ionicons name="chevron-back" size={24} color="#111827" />
    </Pressable>
  );
}

export default function VideosLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="[day]"
        options={{
          title: 'Brainhop-Übungstag',
          headerLeft: () => <BackButton />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="[day]/instructions"
        options={{
          title: 'Brainhop-Instruktionen',
          headerLeft: () => <BackButton />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  );
}
