import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text } from 'react-native';

import { Button } from '@/components/ui/Button';
import { Screen } from '@/components/ui/Screen';
import { Spacing } from '@/constants/spacing';
import { useTheme } from '@/hooks/useTheme';

interface ErrorScreenProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorScreen({ message = 'Something went wrong', onRetry }: ErrorScreenProps) {
  const { theme } = useTheme();

  return (
    <Screen style={styles.container}>
      <Ionicons name="alert-circle-outline" size={52} color={theme.error} />
      <Text style={[styles.title, { color: theme.text }]}>Unable to load</Text>
      <Text style={[styles.message, { color: theme.textSecondary }]}>{message}</Text>
      {onRetry && <Button label="Try Again" icon="refresh" onPress={onRetry} />}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
    gap: Spacing.md,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  message: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: Spacing.sm,
  },
});
