import { useColorScheme } from 'react-native';

import { Colors, type Theme } from '@/constants/colors';

export function useTheme(): { theme: Theme } {
  const colorScheme = useColorScheme() ?? 'light';
  return { theme: Colors[colorScheme] };
}
