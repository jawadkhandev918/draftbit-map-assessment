import { StyleSheet, View } from 'react-native';

import { Skeleton } from '@/components/ui/Skeleton';
import { Spacing } from '@/constants/spacing';
import { useTheme } from '@/hooks/useTheme';

export function MapSkeleton() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Skeleton style={styles.mapFill} width="100%" borderRadius={0} />
      <View style={[styles.badge, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <Skeleton width={120} height={14} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapFill: {
    flex: 1,
  },
  badge: {
    position: 'absolute',
    top: Spacing.lg,
    alignSelf: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: 20,
    borderWidth: 1,
  },
});
