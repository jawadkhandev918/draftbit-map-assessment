import { Ionicons } from '@expo/vector-icons';
import { Platform, Pressable, StyleSheet, type PressableProps } from 'react-native';

import { Radius } from '@/constants/spacing';
import { useTheme } from '@/hooks/useTheme';

interface IconButtonProps extends PressableProps {
  icon: keyof typeof Ionicons.glyphMap;
  size?: number;
}

export function IconButton({ icon, size = 22, style, ...props }: IconButtonProps) {
  const { theme } = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: theme.background },
        pressed && styles.pressed,
        typeof style === 'function' ? style({ pressed }) : style,
      ]}
      hitSlop={8}
      {...props}
    >
      <Ionicons name={icon} size={size} color={theme.text} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: Radius.full,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  pressed: {
    opacity: 0.8,
  },
});
