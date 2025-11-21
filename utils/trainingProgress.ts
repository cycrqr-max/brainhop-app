// utils/trainingProgress.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'brainhop.watchedTrainingIds';

export async function getWatchedTrainingIds(): Promise<string[]> {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (!json) return [];
    const parsed = JSON.parse(json);
    if (Array.isArray(parsed)) {
      return parsed.filter((id) => typeof id === 'string');
    }
    return [];
  } catch (e) {
    console.warn('Failed to load watched trainings', e);
    return [];
  }
}

export async function markTrainingWatched(id: string): Promise<void> {
  try {
    const current = await getWatchedTrainingIds();
    if (current.includes(id)) return;
    const updated = [...current, id];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn('Failed to save watched training', e);
  }

}

export async function resetTrainingProgress(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn('Failed to reset training progress', e);
  }
}