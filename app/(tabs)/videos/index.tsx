// app/(tabs)/videos/index.tsx

import { Image as ExpoImage } from 'expo-image';
import { router, useFocusEffect, type Href } from 'expo-router';
import React, { useCallback, useState } from 'react';
import {
    Alert,
    FlatList,
    Linking,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { trainings } from '@/constants/trainings';
import { getWatchedTrainingIds } from '@/utils/trainingProgress';
import { loadTrialInfo, type TrialInfo } from '@/utils/trial';

const BRAINHOP_ORANGE = '#f59c00';
const LIGHT_BG = '#fff7eb';
const TEXT_DARK = '#111827';
const TEXT_BODY = '#374151';
const TEXT_MUTED = '#6b7280';

export default function VideosListScreen() {
  const [watchedIds, setWatchedIds] = useState<string[]>([]);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [checkedTrial, setCheckedTrial] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      (async () => {
        const [ids, trialInfo] = await Promise.all([
          getWatchedTrainingIds(),
          loadTrialInfo(),
        ]);

        if (!active) return;

        setWatchedIds(ids);
        setTrial(trialInfo);
        setCheckedTrial(true);
      })();

      return () => {
        active = false;
      };
    }, []),
  );

  const status = trial?.status ?? 'not-activated';
  const isTrialActive = status === 'active';
  const isTrialExpired = status === 'expired';

  // -------- Locked view (trial not active) --------
  if (checkedTrial && !isTrialActive) {
    return (
      <ThemedView style={styles.lockedScreen}>
        <View style={styles.hero}>
          <ExpoImage
            source={require('@/assets/images/brainhop_logo_big.png')}
            style={styles.heroLogo}
            contentFit="contain"
          />
          <ThemedText style={styles.heroTitle}>
            {isTrialExpired
              ? '21-Tage Challenge abgelaufen'
              : '21-Tage Challenge noch nicht aktiviert'}
          </ThemedText>
          <ThemedText style={styles.heroSubtitle}>
            {isTrialExpired
              ? 'Deine 21-Tage Challenge ist beendet. Für weiteren Zugriff auf alle Brainhop-Trainingsvideos hol dir bitte die Vollversion auf unserer Website.'
              : 'Um die Brainhop-Trainingsvideos zu nutzen, aktiviere zuerst deine 21-Tage Challenge auf der Startseite.'}
          </ThemedText>
        </View>

        <View style={styles.lockedActions}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => {
              if (isTrialExpired) {
                Linking.openURL('https://brainhop.net');
              } else {
                router.replace('/');
              }
            }}
          >
            <ThemedText style={styles.primaryButtonText}>
              {isTrialExpired
                ? 'Zur Vollversion auf brainhop.net'
                : 'Zur Startseite'}
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>
    );
  }

  // Index des ersten nicht erledigten Tages (kann -1 sein, wenn alles erledigt)
  const firstUnwatchedIndex = trainings.findIndex(
    (t) => !watchedIds.includes(t.id),
  );
  const hasUnwatched = firstUnwatchedIndex !== -1;
  const completedCount = watchedIds.length;
  const progressPercent = Math.round(
    (completedCount / trainings.length) * 100,
  );

  // -------- Normale Liste (Trial aktiv) --------
  return (
    <ThemedView style={styles.container}>
      {/* Hero / jumbotron */}
      <View style={styles.hero}>
        <ExpoImage
          source={require('@/assets/images/brainhop_logo_big.png')}
          style={styles.heroLogo}
          contentFit="contain"
        />
        <ThemedText style={styles.heroTitle}>
          Dein Brainhop-Programm
        </ThemedText>
        <ThemedText style={styles.heroSubtitle}>
          Wähle deinen heutigen Übungstag aus und arbeite dich Schritt
          für Schritt durch die Trainings.
        </ThemedText>
      </View>

      <View style={styles.progressCard}>
        <View style={styles.progressTopRow}>
          <ThemedText style={styles.progressTitle}>Dein Fortschritt</ThemedText>
          <ThemedText style={styles.progressPercent}>{progressPercent}%</ThemedText>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
        </View>
        <ThemedText style={styles.progressCaption}>
          {completedCount} von {trainings.length} Tagen abgeschlossen
        </ThemedText>
      </View>

      <ThemedText style={styles.sectionTitle}>
        Deine Trainingstage
      </ThemedText>

      <FlatList
        data={trainings}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item, index }) => {
          const isWatched = watchedIds.includes(item.id);
          const href = `/videos/${item.id}` as Href;
          const description =
            item.exercise.additionalInfo ?? item.exercise.title;

          // Nur der erste nicht erledigte Tag ist freigeschaltet.
          // Alle späteren nicht erledigten Tage sind gesperrt.
          const isLocked =
            hasUnwatched &&
            !isWatched &&
            index > firstUnwatchedIndex;

          const handlePress = () => {
            if (isLocked) {
              const required = trainings[firstUnwatchedIndex];
              Alert.alert(
                'Übung noch gesperrt',
                `Bitte schließe zuerst ${required.label} ab, bevor du mit diesem Übungstag weitermachst.`,
              );
              return;
            }
            router.push(href);
          };

          return (
            <TouchableOpacity
              style={[styles.card, isLocked && styles.cardLocked]}
              onPress={handlePress}
            >
              {/* Accent bar on the left */}
              <View
                style={[
                  styles.cardAccent,
                  isLocked && styles.cardAccentLocked,
                ]}
              />

              <View style={styles.cardMain}>
                <View style={styles.cardTitleRow}>
                  <ThemedText style={styles.cardTitle}>
                    {item.label}
                  </ThemedText>
                  {isLocked && !isWatched && (
                    <ExpoImage
                      source={require('@/assets/images/lock.png')}
                      style={styles.lockIcon}
                      contentFit="contain"
                    />
                  )}
                </View>

                <ThemedText style={styles.cardDescription}>
                  {description}
                </ThemedText>

                <View style={styles.cardMetaRow}>
                  <ThemedText style={styles.cardMetaText}>
                    Tag {index + 1} von {trainings.length}
                  </ThemedText>
                  {!isLocked && !isWatched && index === firstUnwatchedIndex && (
                    <View style={styles.nextPill}>
                      <ThemedText style={styles.nextPillText}>
                        aktueller Tag
                      </ThemedText>
                    </View>
                  )}
                  {isWatched && (
                    <View style={styles.pill}>
                      <ThemedText style={styles.pillText}>
                        abgeschlossen
                      </ThemedText>
                    </View>
                  )}
                </View>
              </View>

              {/* Check icon on the right */}
              <ExpoImage
                source={
                  isWatched
                    ? require('@/assets/images/check-green.png')
                    : require('@/assets/images/check-black.png')
                }
                style={styles.checkIcon}
                contentFit="contain"
              />
            </TouchableOpacity>
          );
        }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_BG,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },

  hero: {
    backgroundColor: '#ffe9c7',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffdca8',
  },
  heroLogo: {
    width: '80%',
    height: 48,
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

  progressCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ffe1b4',
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 14,
  },
  progressTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: TEXT_DARK,
  },
  progressPercent: {
    fontSize: 14,
    fontWeight: '700',
    color: '#9a6700',
  },
  progressTrack: {
    width: '100%',
    height: 10,
    borderRadius: 999,
    backgroundColor: '#ffedd0',
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: BRAINHOP_ORANGE,
  },
  progressCaption: {
    fontSize: 12,
    color: TEXT_MUTED,
  },

  sectionTitle: {
    marginBottom: 8,
    marginLeft: 4,
    fontSize: 16,
    fontWeight: '700',
    color: TEXT_DARK,
  },

  listContent: {
    paddingBottom: 24,
  },
  separator: {
    height: 10,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f6f0e7',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  cardLocked: {
    opacity: 0.82,
  },
  cardAccent: {
    width: 4,
    alignSelf: 'stretch',
    backgroundColor: BRAINHOP_ORANGE,
  },
  cardAccentLocked: {
    backgroundColor: '#4b5563', // dunkles Grau für gesperrte Tage
  },
  cardMain: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    marginBottom: 2,
    fontSize: 16,
    fontWeight: '700',
    color: TEXT_DARK,
  },
  lockIcon: {
    width: 16,
    height: 16,
    marginLeft: 6,
  },
  cardDescription: {
    fontSize: 13,
    color: TEXT_BODY,
    marginBottom: 6,
    lineHeight: 18,
  },
  cardMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardMetaText: {
    fontSize: 12,
    color: TEXT_MUTED,
  },
  pill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: '#ecfdf5',
  },
  pillText: {
    fontSize: 11,
    color: '#15803d',
  },
  nextPill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: '#fff4de',
    borderWidth: 1,
    borderColor: '#ffd38a',
  },
  nextPillText: {
    fontSize: 11,
    color: '#9a6700',
    fontWeight: '600',
  },

  checkIcon: {
    width: 26,
    height: 26,
    marginRight: 10,
  },

  // Locked view styles
  lockedScreen: {
    flex: 1,
    backgroundColor: LIGHT_BG,
    paddingHorizontal: 16,
    paddingVertical: 20,
    justifyContent: 'center',
  },
  lockedActions: {
    marginTop: 16,
    alignItems: 'center',
  },

  primaryButton: {
    marginTop: 4,
    borderRadius: 999,
    backgroundColor: BRAINHOP_ORANGE,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
});
