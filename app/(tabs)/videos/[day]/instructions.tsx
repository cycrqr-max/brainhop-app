// app/(tabs)/videos/[day]/instructions.tsx
import { Image as ExpoImage } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { trainings } from '@/constants/trainings';

export default function TrainingInstructionsScreen() {
  const { day } = useLocalSearchParams<{ day?: string }>();

  const training = trainings.find((t) => t.id === day);

  if (!training) {
    return (
      <ThemedView style={styles.fullScreen}>
        <ThemedText type="title">Instruktionen nicht gefunden</ThemedText>
      </ThemedView>
    );
  }

  const video = training.instructions;
  const player = useVideoPlayer(video.link, (player) => {
    player.loop = false;
  });

  return (
    <ThemedView style={styles.fullScreen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Logo at the top */}
        <ExpoImage
          source={require('@/assets/images/brainhop_logo_big.png')}
          style={styles.logo}
          contentFit="contain"
        />

        {/* Title + description */}
        <ThemedText type="title" style={styles.title}>
          Instruktionen – {training.label}
        </ThemedText>

        <ThemedText type="subtitle" style={styles.subtitle}>
          {video.title}
        </ThemedText>

        {video.additionalInfo && (
          <ThemedText style={styles.info}>{video.additionalInfo}</ThemedText>
        )}

        {/* Video */}
        <View style={styles.videoWrapper}>
          <VideoView
            player={player}
            style={styles.video}
            nativeControls
            contentFit="contain"
          />
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    width: '100%',
    height: 80,
    marginBottom: 16,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 4,
    textAlign: 'center',
  },
  info: {
    marginTop: 4,
    marginBottom: 4,
    textAlign: 'center',
  },
  videoWrapper: {
    width: '100%',
    maxWidth: 500,
    aspectRatio: 16 / 9,
    borderRadius: 12,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 8,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
