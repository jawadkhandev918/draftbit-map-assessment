import { StyleSheet, View } from 'react-native';

import { Card } from '@/components/ui/Card';
import { Screen } from '@/components/ui/Screen';
import { Skeleton } from '@/components/ui/Skeleton';
import { Spacing } from '@/constants/spacing';

export function LocationDetailSkeleton() {
  return (
    <Screen>
      <Skeleton width="100%" height={280} borderRadius={0} />
      <View style={styles.content}>
        <Skeleton width="75%" height={32} />
        <Skeleton width="100%" height={16} />
        <Skeleton width="90%" height={16} />

        <Card style={styles.card}>
          <Skeleton width="40%" height={14} style={styles.cardPadding} />
          <Skeleton width="100%" height={48} style={styles.cardPadding} />
          <Skeleton width="100%" height={48} style={styles.cardPadding} />
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: Spacing.lg,
    gap: Spacing.md,
  },
  card: {
    marginTop: Spacing.sm,
    gap: Spacing.sm,
  },
  cardPadding: {
    marginHorizontal: Spacing.md,
    marginVertical: Spacing.sm,
  },
});
