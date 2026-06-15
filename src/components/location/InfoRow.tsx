import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { Radius, Spacing } from '@/constants/spacing';
import { useTheme } from '@/hooks/useTheme';

interface InfoRowProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}

export function InfoRow({ icon, label, value }: InfoRowProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.row}>
      <View style={[styles.iconWrap, { backgroundColor: theme.primary + '18' }]}>
        <Ionicons name={icon} size={18} color={theme.primary} />
      </View>
      <View style={styles.textWrap}>
        <Text style={[styles.label, { color: theme.textSecondary }]}>{label}</Text>
        <Text style={[styles.value, { color: theme.text }]}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm + 4,
    gap: Spacing.md - 2,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: Radius.sm + 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrap: {
    flex: 1,
    gap: 2,
  },
  label: {
    fontSize: 12,
  },
  value: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'monospace',
  },
});
