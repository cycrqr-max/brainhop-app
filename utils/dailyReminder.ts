// utils/dailyReminder.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

const STORAGE_KEY = 'brainhop.dailyReminder';

export type ReminderSettings = {
  enabled: boolean;
  notificationId?: string;
};

export async function loadReminderSettings(): Promise<ReminderSettings> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return { enabled: false };
    return JSON.parse(raw) as ReminderSettings;
  } catch {
    return { enabled: false };
  }
}

async function save(settings: ReminderSettings) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

export async function setDailyReminder(
  enabled: boolean,
): Promise<ReminderSettings> {
  const current = await loadReminderSettings();

  // cancel existing one if present
  if (current.notificationId) {
    try {
      await Notifications.cancelScheduledNotificationAsync(
        current.notificationId,
      );
    } catch {}
  }

  if (!enabled) {
    const settings: ReminderSettings = { enabled: false };
    await save(settings);
    return settings;
  }

  // permissions
  const { status: existingStatus } =
    await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const result = await Notifications.requestPermissionsAsync();
    finalStatus = result.status;
  }

  if (finalStatus !== 'granted') {
    const settings: ReminderSettings = { enabled: false };
    await save(settings);
    return settings;
  }

  // Android channel
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('daily-reminder', {
      name: 'Tägliche Brainhop-Erinnerung',
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }

  // schedule once per day e.g. at 18:00 local time
  const notificationId = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Deine nächste Brainhop-Übung wartet',
      body: 'Öffne Brainhop und mach heute deine Übung.',
      sound: 'default',
    },
    trigger: {
      hour: 18,
      minute: 0,
      repeats: true,
      channelId: Platform.OS === 'android' ? 'daily-reminder' : undefined,
    } as any,
  });

  const settings: ReminderSettings = {
    enabled: true,
    notificationId,
  };
  await save(settings);
  return settings;
}
