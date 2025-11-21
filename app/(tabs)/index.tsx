// app/(tabs)/index.tsx

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Home</ThemedText>

      <ThemedText type="subtitle" style={styles.subtitle}>
        Welcome to the app 👋
      </ThemedText>

      <ThemedText style={styles.body}>
        This is the Home screen. We can later add some real content here
        (intro text, links, or anything else you need).
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    gap: 12,
  },
  subtitle: {
    marginTop: 8,
  },
  body: {
    marginTop: 8,
  },
});
