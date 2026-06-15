import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, type PressableProps } from 'react-native';

import { Radius, Spacing } from '@/constants/spacing';
import { useTheme } from '@/hooks/useTheme';

interface ButtonProps extends PressableProps {
  label: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

export function Button({ label, icon, style, ...props }: ButtonProps) {
  const { theme } = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: theme.primary },
        pressed && styles.pressed,
        typeof style === 'function' ? style({ pressed }) : style,
      ]}
      {...props}
    >
      {icon && <Ionicons name={icon} size={18} color="#FFFFFF" />}
      <Text style={[styles.label, styles.labelOnPrimary]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm + 4,
    borderRadius: Radius.sm + 2,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
  },
  labelOnPrimary: {
    color: '#FFFFFF',
  },
  pressed: {
    opacity: 0.85,
  },
});
