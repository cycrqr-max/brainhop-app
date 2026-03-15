import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { trainings } from '@/constants/trainings';

type DayNavigatorProps = {
  currentDayId: string;
  onSelectDay: (dayId: string) => void;
};

const ACCENT = '#f59c00';
const TEXT_DARK = '#111827';
const TEXT_MUTED = '#6b7280';

export function DayNavigator({ currentDayId, onSelectDay }: DayNavigatorProps) {
  const currentIndex = trainings.findIndex((day) => day.id === currentDayId);

  const goPrevious = () => {
    if (currentIndex <= 0) return;
    onSelectDay(trainings[currentIndex - 1].id);
  };

  const goNext = () => {
    if (currentIndex === -1 || currentIndex >= trainings.length - 1) return;
    onSelectDay(trainings[currentIndex + 1].id);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerRow}>
        <ThemedText style={styles.label}>Tag wechseln</ThemedText>
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={[
              styles.quickButton,
              currentIndex <= 0 && styles.quickButtonDisabled,
            ]}
            onPress={goPrevious}
            disabled={currentIndex <= 0}
          >
            <ThemedText style={styles.quickButtonText}>Zurück</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.quickButton,
              (currentIndex === -1 || currentIndex >= trainings.length - 1) &&
                styles.quickButtonDisabled,
            ]}
            onPress={goNext}
            disabled={currentIndex === -1 || currentIndex >= trainings.length - 1}
          >
            <ThemedText style={styles.quickButtonText}>Weiter</ThemedText>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipsRow}
      >
        {trainings.map((day, index) => {
          const isActive = day.id === currentDayId;
          return (
            <TouchableOpacity
              key={day.id}
              style={[styles.chip, isActive && styles.chipActive]}
              onPress={() => onSelectDay(day.id)}
            >
              <ThemedText style={[styles.chipText, isActive && styles.chipTextActive]}>
                {index + 1}
              </ThemedText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <ThemedText style={styles.helperText}>
        {currentIndex >= 0
          ? `Aktuell: Tag ${currentIndex + 1} von ${trainings.length}`
          : `Aktuell: Unbekannter Tag`}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 14,
  },
  headerRow: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: TEXT_DARK,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 8,
  },
  quickButton: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#fff1d9',
    borderWidth: 1,
    borderColor: '#ffd79c',
  },
  quickButtonDisabled: {
    opacity: 0.45,
  },
  quickButtonText: {
    color: TEXT_DARK,
    fontSize: 12,
    fontWeight: '600',
  },
  chipsRow: {
    flexDirection: 'row',
    gap: 8,
    paddingBottom: 4,
  },
  chip: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipActive: {
    backgroundColor: ACCENT,
    borderColor: ACCENT,
  },
  chipText: {
    color: TEXT_MUTED,
    fontSize: 13,
    fontWeight: '700',
  },
  chipTextActive: {
    color: '#ffffff',
  },
  helperText: {
    marginTop: 8,
    color: TEXT_MUTED,
    fontSize: 12,
  },
});
