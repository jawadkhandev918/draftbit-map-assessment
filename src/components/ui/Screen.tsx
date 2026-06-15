import { StyleSheet, View, type ViewProps } from 'react-native';

import { useTheme } from '@/hooks/useTheme';

export function Screen({ style, children, ...props }: ViewProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.screen, { backgroundColor: theme.background }, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
