export const Colors = {
  light: {
    primary: '#2563EB',
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#0F172A',
    textSecondary: '#64748B',
    border: '#E2E8F0',
    error: '#EF4444',
    skeleton: '#E2E8F0',
  },
  dark: {
    primary: '#3B82F6',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F8FAFC',
    textSecondary: '#94A3B8',
    border: '#334155',
    error: '#F87171',
    skeleton: '#334155',
  },
} as const;

export type ColorScheme = keyof typeof Colors;
export type Theme = (typeof Colors)[ColorScheme];
