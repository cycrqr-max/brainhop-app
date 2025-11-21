// app/(tabs)/index.tsx

import { Image as ExpoImage } from 'expo-image';
import { router, useFocusEffect, type Href } from 'expo-router';
import React, { useCallback, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { trainings } from '@/constants/trainings';
import {
  getWatchedTrainingIds,
  resetTrainingProgress,
} from '@/utils/trainingProgress';

const BRAINHOP_ORANGE = '#f59c00';
const LIGHT_BG = '#fff7eb';
const TEXT_DARK = '#111827';
const TEXT_BODY = '#374151';
const TEXT_MUTED = '#6b7280';

export default function HomeScreen() {
  const [watchedIds, setWatchedIds] = useState<string[]>([]);
  const [isResetting, setIsResetting] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      (async () => {
        const ids = await getWatchedTrainingIds();
        if (active) setWatchedIds(ids);
      })();
      return () => {
        active = false;
      };
    }, [])
  );

  const total = trainings.length;
  const completed = trainings.filter((t) => watchedIds.includes(t.id)).length;
  const progress = total > 0 ? (completed / total) * 100 : 0;
  const score = Math.round(progress);

  const nextTraining = trainings.find((t) => !watchedIds.includes(t.id));
  const allDone = !nextTraining && total > 0;

  const handleReset = async () => {
    try {
      setIsResetting(true);
      await resetTrainingProgress();
      const ids = await getWatchedTrainingIds();
      setWatchedIds(ids);
    } finally {
      setIsResetting(false);
    }
  };

  const handleStartNext = () => {
    if (!nextTraining) return;
    const href = `/videos/${nextTraining.id}` as Href;
    router.push(href);
  };

  return (
    <ThemedView style={styles.fullScreen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Hero / welcome */}
        <View style={styles.hero}>
          <ExpoImage
            source={require('@/assets/images/brainhop_logo_big.png')}
            style={styles.heroLogo}
            contentFit="contain"
          />
          <ThemedText style={styles.heroTitle}>
            Willkommen bei Brainhop
          </ThemedText>
          <ThemedText style={styles.heroSubtitle}>
            Schön, dass du da bist! Arbeite dich in deinem Tempo durch die
            täglichen Übungen und entfalte Schritt für Schritt dein Potenzial.
          </ThemedText>
        </View>

        {/* Progress card */}
        <View style={styles.card}>
          <ThemedText style={styles.cardTitle}>
            Brainhop-Score
          </ThemedText>
          <ThemedText style={styles.cardScoreText}>
            {score}% abgeschlossen
          </ThemedText>
          <ThemedText style={styles.cardSubText}>
            {completed} von {total} Übungstagen erledigt
          </ThemedText>

          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${score}%` },
              ]}
            />
          </View>
        </View>

        {/* Next / reset card */}
        <View style={styles.card}>
          {allDone ? (
            <>
              <ThemedText style={styles.cardTitle}>
                Alle Übungen geschafft!
              </ThemedText>
              <ThemedText style={styles.cardSubText}>
                Du hast alle Brainhop-Übungstage abgeschlossen – starke
                Leistung!
              </ThemedText>
              <ThemedText style={styles.cardSubText}>
                Möchtest du noch einmal von vorne starten und alles auffrischen?
              </ThemedText>

              <TouchableOpacity
                style={[
                  styles.primaryButton,
                  styles.resetButton,
                  isResetting && { opacity: 0.6 },
                ]}
                disabled={isResetting}
                onPress={handleReset}
              >
                <ThemedText style={styles.primaryButtonText}>
                  Alles auf Anfang setzen
                </ThemedText>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <ThemedText style={styles.cardTitle}>
                Dein nächster Übungstag
              </ThemedText>

              {nextTraining && (
                <>
                  <ThemedText style={styles.nextLabel}>
                    {nextTraining.label}
                  </ThemedText>
                  <ThemedText style={styles.cardSubText}>
                    {nextTraining.exercise.additionalInfo ??
                      nextTraining.exercise.title}
                  </ThemedText>

                  <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={handleStartNext}
                  >
                    <ThemedText style={styles.primaryButtonText}>
                      Übung starten
                    </ThemedText>
                  </TouchableOpacity>
                </>
              )}
            </>
          )}
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
    gap: 16,
  },

  hero: {
    backgroundColor: '#ffe9c7',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  heroLogo: {
    width: '80%',
    height: 56,
    marginBottom: 8,
  },
  heroTitle: {
    textAlign: 'center',
    marginBottom: 4,
    fontSize: 20,
    fontWeight: '700',
    color: TEXT_DARK,
  },
  heroSubtitle: {
    textAlign: 'center',
    fontSize: 13,
    color: TEXT_BODY,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 18,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },
  cardTitle: {
    marginBottom: 4,
    fontSize: 18,
    fontWeight: '700',
    color: TEXT_DARK,
  },
  cardScoreText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
    color: TEXT_BODY,
  },
  cardSubText: {
    fontSize: 13,
    color: TEXT_BODY,
    marginBottom: 8,
  },

  progressBar: {
    height: 10,
    borderRadius: 999,
    backgroundColor: '#e5e7eb',
    overflow: 'hidden',
    marginTop: 4,
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: BRAINHOP_ORANGE,
  },

  nextLabel: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 6,
    marginBottom: 4,
    color: TEXT_DARK,
  },

  primaryButton: {
    marginTop: 10,
    borderRadius: 999,
    backgroundColor: BRAINHOP_ORANGE,
    paddingVertical: 10,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },

  resetButton: {
    marginTop: 14,
  },
});
