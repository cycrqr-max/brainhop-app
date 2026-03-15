import { Image as ExpoImage } from 'expo-image';
import {
  router,
  useFocusEffect,
  useLocalSearchParams,
  type Href,
} from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { DayNavigator } from '@/components/day-navigator';
import { trainings } from '@/constants/trainings';
import { buildPcloudStreamUrl } from '@/utils/pcloudClient';
import { markTrainingWatched } from '@/utils/trainingProgress';

const BRAINHOP_ORANGE = '#f59c00';
const LIGHT_BG = '#fff7eb';
const TEXT_DARK = '#111827';
const TEXT_BODY = '#374151';

export default function TrainingDayScreen() {
  const { day } = useLocalSearchParams<{ day?: string }>();
  const training = trainings.find((t) => t.id === day);
  const currentIndex = trainings.findIndex((t) => t.id === day);

  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!training) return;
    setLoadError(null);
    setLoading(true);

    // We only need to build the backend stream URL for the selected exercise.
    const url = buildPcloudStreamUrl(training.exercise.link);
    setVideoUrl(url);
    setLoading(false);
  }, [training]);


  // Create player when we have a URL
  const player = useVideoPlayer(videoUrl ?? '', (player) => {
    player.loop = false;
  });

  useEffect(() => {
    if (!training) return;
    markTrainingWatched(training.id).catch(() => {});
  }, [training]);

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
        <ThemedText type="title">Trainingstag nicht gefunden</ThemedText>
      </ThemedView>
    );
  }

  const video = training.exercise;
  const hasInstructions = Boolean(training.instructions.link.trim());

  return (
    <ThemedView style={styles.fullScreen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <DayNavigator
          currentDayId={training.id}
          onSelectDay={(dayId) => {
            const href = `/videos/${dayId}` as Href;
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

          <ThemedText style={styles.title}>{training.label}</ThemedText>
          <ThemedText style={styles.dayProgressText}>
            Tag {currentIndex + 1} von {trainings.length}
          </ThemedText>
          <ThemedText style={styles.subtitle}>{video.title}</ThemedText>

          {video.additionalInfo && (
            <ThemedText style={styles.info}>{video.additionalInfo}</ThemedText>
          )}

          <TouchableOpacity
            style={[
              styles.instructionsButton,
              !hasInstructions && styles.instructionsButtonDisabled,
            ]}
            onPress={() => {
              if (!hasInstructions) return;
              const href = `/videos/${training.id}/instructions` as Href;
              router.push(href);
            }}
            disabled={!hasInstructions}
          >
            <ThemedText style={styles.instructionsText}>
              {hasInstructions
                ? 'Instruktionsvideo ansehen'
                : 'Keine separaten Instruktionen fuer diesen Tag'}
            </ThemedText>
          </TouchableOpacity>

          <View style={styles.videoWrapper}>
            {loading && (
              <View style={styles.loadingOverlay}>
                <ActivityIndicator size="large" color={BRAINHOP_ORANGE} />
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

  instructionsButton: {
    marginTop: 2,
    marginBottom: 14,
    width: '100%',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#fff3dc',
    borderWidth: 1,
    borderColor: '#ffdca8',
  },
  instructionsButtonDisabled: {
    opacity: 0.6,
  },
  instructionsText: {
    color: '#9a6700',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 13,
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
