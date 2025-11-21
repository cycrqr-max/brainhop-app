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

export default function VideosListScreen() {
  const [watchedIds, setWatchedIds] = useState<string[]>([]);

  // Reload progress whenever this screen comes into focus
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
      {/* Logo at the top */}
      <ExpoImage
        source={require('@/assets/images/brainhop_logo_big.png')}
        style={styles.logo}
        contentFit="contain"
      />

      <ThemedText type="title" style={styles.heading}>
        Trainings Videos
      </ThemedText>

      <FlatList
        data={trainings}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => {
          const isWatched = watchedIds.includes(item.id);
          const href = `/videos/${item.id}` as Href;

          const description =
            item.exercise.additionalInfo ?? item.exercise.title;

          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push(href)}
            >
              <View style={styles.cardTextWrapper}>
                <ThemedText type="subtitle" style={styles.cardTitle}>
                  {item.label}
                </ThemedText>
                <ThemedText style={styles.cardDescription}>
                  {description}
                </ThemedText>
              </View>

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
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  logo: {
    width: '100%',
    height: 80,
    marginBottom: 16,
  },
  heading: {
    textAlign: 'center',
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 24,
  },
  separator: {
    height: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  cardTextWrapper: {
    flex: 1,
    paddingRight: 12,
  },
  cardTitle: {
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: '#4b5563',
  },
  checkIcon: {
    width: 24,
    height: 24,
  },
});
