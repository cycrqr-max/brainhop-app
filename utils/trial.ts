// utils/trial.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const TRIAL_KEY = 'brainhop.trialStartDate';

export type TrialStatus = 'not-activated' | 'active' | 'expired';

export type TrialInfo = {
  status: TrialStatus;
  startDate: Date | null;
  endDate: Date | null;
};

function parseStoredDate(value: string | null): Date | null {
  if (!value) return null;
  const d = new Date(value);
  return isNaN(d.getTime()) ? null : d;
}

function computeEndDate(start: Date): Date {
  const end = new Date(start);
  end.setDate(end.getDate() + 21);
  return end;
}


export async function loadTrialInfo(): Promise<TrialInfo> {
  try {
    const stored = await AsyncStorage.getItem(TRIAL_KEY);
    const startDate = parseStoredDate(stored);

    if (!startDate) {
      return { status: 'not-activated', startDate: null, endDate: null };
    }

    const endDate = computeEndDate(startDate);
    const now = new Date();

    const status: TrialStatus = now < endDate ? 'active' : 'expired';

    return { status, startDate, endDate };
  } catch (e) {
    console.warn('Failed to load trial info', e);
    return { status: 'not-activated', startDate: null, endDate: null };
  }
}

// Start trial only if not already started.
// Returns the up-to-date TrialInfo after starting.
export async function startTrial(): Promise<TrialInfo> {
  try {
    const existing = await AsyncStorage.getItem(TRIAL_KEY);
    if (!existing) {
      const nowIso = new Date().toISOString();
      await AsyncStorage.setItem(TRIAL_KEY, nowIso);
    }
  } catch (e) {
    console.warn('Failed to start trial', e);
  }

  return loadTrialInfo();
}

// Optional helper if you ever want to clear it during development.
export async function clearTrial(): Promise<void> {
  try {
    await AsyncStorage.removeItem(TRIAL_KEY);
  } catch (e) {
    console.warn('Failed to clear trial', e);
  }
}
