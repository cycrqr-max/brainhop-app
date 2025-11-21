// app/(tabs)/_layout.tsx
import { Tabs, router } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';

const BRAINHOP_ORANGE = '#f59c00';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: BRAINHOP_ORANGE,
        tabBarInactiveTintColor: '#64748b',
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="videos"
        listeners={{
          tabPress: (e: any) => {
            e.preventDefault();
            router.replace('/videos');
          },
        }}
        options={{
          title: 'Videos',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('@/assets/images/video-icon.png')}
              style={{ width: 26, height: 26, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
