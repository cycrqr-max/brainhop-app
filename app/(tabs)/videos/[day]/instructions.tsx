// app/(tabs)/videos/[day]/instructions.tsx

import { Image as ExpoImage } from 'expo-image';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import React, { useCallback, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { trainings } from '@/constants/trainings';
import { getPcloudFileUrlFromPublink } from '@/utils/pcloudClient';

const LIGHT_BG = '#fff7eb';
const TEXT_DARK = '#111827';
const TEXT_BODY = '#374151';

export default function TrainingInstructionsScreen() {
  const { day } = useLocalSearchParams<{ day?: string }>();
  const training = trainings.find((t) => t.id === day);

  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!training) return;

    let active = true;
    setLoading(true);
    setLoadError(null);

    (async () => {
      try {
        const url = await getPcloudFileUrlFromPublink(
          training.instructions.link,
        );
        if (!active) return;
        setVideoUrl(url);
      } catch (e) {
        console.warn('Failed to load pCloud instructions URL', e);
        if (active) {
          setLoadError('Video konnte nicht geladen werden.');
        }
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [training]);

  const player = useVideoPlayer(videoUrl ?? '', (player) => {
    player.loop = false;
  });

  useFocusEffect(
    useCallback(() => {
      return () => {
        try {
          player.pause();
        } catch {}
      };
    }, [player]),
  );

  if (!training) {
    return (
      <ThemedView style={styles.fullScreen}>
        <ThemedText type="title">Instruktionen nicht gefunden</ThemedText>
      </ThemedView>
    );
  }

  const video = training.instructions;

  return (
    <ThemedView style={styles.fullScreen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <View style={styles.cardIconWrapper}>
            <ExpoImage
              source={require('@/assets/images/brainhop_logo.png')}
              style={styles.cardIcon}
              contentFit="contain"
            />
          </View>

          <ThemedText style={styles.title}>
            Instruktionen – {training.label}
          </ThemedText>

          <ThemedText style={styles.subtitle}>{video.title}</ThemedText>

          {video.additionalInfo && (
            <ThemedText style={styles.info}>{video.additionalInfo}</ThemedText>
          )}

          <View style={styles.videoWrapper}>
            {loading && (
              <View style={styles.loadingOverlay}>
                <ActivityIndicator size="large" />
              </View>
            )}
            {loadError && (
              <View style={styles.loadingOverlay}>
                <ThemedText style={styles.errorText}>{loadError}</ThemedText>
              </View>
            )}
            {videoUrl && !loading && !loadError && (
              <VideoView
                player={player}
                style={styles.video}
                nativeControls
                contentFit="contain"
              />
            )}
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

// styles: same as before plus loadingOverlay/errorText if you want, or reuse from [day].tsx


const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: LIGHT_BG,
  },
  scroll: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },
  cardIconWrapper: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#ffe9c7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  cardIcon: {
    width: 34,
    height: 34,
  },

  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: TEXT_DARK,
  },
  subtitle: {
    marginTop: 4,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: TEXT_DARK,
  },
  info: {
    marginTop: 8,
    marginBottom: 8,
    textAlign: 'center',
    fontSize: 14,
    color: TEXT_BODY,
  },

  videoWrapper: {
    width: '100%',
    maxWidth: 500,
    aspectRatio: 16 / 9,
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 8,
    backgroundColor: '#d1d5db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  loadingOverlay: {
    position: 'absolute',
    inset: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#b91c1c',
    textAlign: 'center',
  },
});
