// app/(tabs)/videos/index.tsx

import { Image as ExpoImage } from 'expo-image';
import { router, useFocusEffect, type Href } from 'expo-router';
import React, { useCallback, useState } from 'react';
import {
    FlatList,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { trainings } from '@/constants/trainings';
import { getWatchedTrainingIds } from '@/utils/trainingProgress';

const BRAINHOP_ORANGE = '#f59c00';
const LIGHT_BG = '#fff7eb';
const TEXT_DARK = '#111827';
const TEXT_BODY = '#374151';
const TEXT_MUTED = '#6b7280';

export default function VideosListScreen() {
  const [watchedIds, setWatchedIds] = useState<string[]>([]);

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

          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push(href)}
            >
              {/* Accent bar on the left */}
              <View style={styles.cardAccent} />

              <View style={styles.cardMain}>
                <ThemedText style={styles.cardTitle}>
                  {item.label}
                </ThemedText>
                <ThemedText style={styles.cardDescription}>
                  {description}
                </ThemedText>

                <View style={styles.cardMetaRow}>
                  <ThemedText style={styles.cardMetaText}>
                    Tag {index + 1} von {trainings.length}
                  </ThemedText>
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
    paddingVertical: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  heroLogo: {
    width: '80%',
    height: 48,
    marginBottom: 8,
  },
  heroTitle: {
    textAlign: 'center',
    marginBottom: 4,
    fontSize: 18,
    fontWeight: '700',
    color: TEXT_DARK,
  },
  heroSubtitle: {
    textAlign: 'center',
    fontSize: 13,
    color: TEXT_BODY,
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

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  cardAccent: {
    width: 4,
    alignSelf: 'stretch',
    backgroundColor: BRAINHOP_ORANGE,
  },
  cardMain: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  cardTitle: {
    marginBottom: 2,
    fontSize: 16,
    fontWeight: '700',
    color: TEXT_DARK,
  },
  cardDescription: {
    fontSize: 13,
    color: TEXT_BODY,
    marginBottom: 6,
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

  checkIcon: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
});
