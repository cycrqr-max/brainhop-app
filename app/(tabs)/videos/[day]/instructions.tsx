// app/(tabs)/videos/[day]/instructions.tsx

import { Image as ExpoImage } from 'expo-image';
import { router, useFocusEffect, useLocalSearchParams, type Href } from 'expo-router';
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
import { DayNavigator } from '@/components/day-navigator';
import { trainings } from '@/constants/trainings';
import { buildPcloudStreamUrl } from '@/utils/pcloudClient';

const LIGHT_BG = '#fff7eb';
const TEXT_DARK = '#111827';
const TEXT_BODY = '#374151';

export default function TrainingInstructionsScreen() {
  const { day } = useLocalSearchParams<{ day?: string }>();
  const training = trainings.find((t) => t.id === day);
  const currentIndex = trainings.findIndex((t) => t.id === day);

  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!training) return;
    if (!training.instructions.link.trim()) {
      setVideoUrl(null);
      setLoadError(null);
      setLoading(false);
      return;
    }

    setLoadError(null);
    setLoading(true);

    const url = buildPcloudStreamUrl(training.instructions.link);
    setVideoUrl(url);
    setLoading(false);
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
        <DayNavigator
          currentDayId={training.id}
          onSelectDay={(dayId) => {
            const href = `/videos/${dayId}/instructions` as Href;
            router.replace(href);
          }}
        />

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
          <ThemedText style={styles.dayProgressText}>
            Tag {currentIndex + 1} von {trainings.length}
          </ThemedText>

          <ThemedText style={styles.subtitle}>{video.title}</ThemedText>

          {video.additionalInfo && (
            <ThemedText style={styles.info}>{video.additionalInfo}</ThemedText>
          )}

          {!training.instructions.link.trim() && (
            <View style={styles.emptyStateBox}>
              <ThemedText style={styles.emptyStateTitle}>
                Keine separaten Instruktionen vorhanden
              </ThemedText>
              <ThemedText style={styles.emptyStateText}>
                Fuer diesen Tag ist nur das Uebungsvideo verfuegbar.
              </ThemedText>
            </View>
          )}

          {!!training.instructions.link.trim() && (
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
          )}
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
    paddingBottom: 28,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.09,
    shadowRadius: 14,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#fef0d8',
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
    fontSize: 24,
    fontWeight: '700',
    color: TEXT_DARK,
  },
  dayProgressText: {
    marginTop: 4,
    fontSize: 12,
    color: '#9a6700',
    fontWeight: '600',
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
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 14,
    color: TEXT_BODY,
    lineHeight: 20,
  },

  emptyStateBox: {
    marginTop: 8,
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#f8d69a',
    backgroundColor: '#fff7ea',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  emptyStateTitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: '#9a6700',
    marginBottom: 4,
  },
  emptyStateText: {
    textAlign: 'center',
    fontSize: 13,
    color: TEXT_BODY,
  },

  videoWrapper: {
    width: '100%',
    maxWidth: 500,
    aspectRatio: 16 / 9,
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 4,
    backgroundColor: '#e5e7eb',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
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
