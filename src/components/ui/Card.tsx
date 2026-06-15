import { StyleSheet, View, type ViewProps } from 'react-native';

import { Radius } from '@/constants/spacing';
import { useTheme } from '@/hooks/useTheme';

export function Card({ style, children, ...props }: ViewProps) {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }, style]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.md,
    borderWidth: 1,
    overflow: 'hidden',
  },
});
