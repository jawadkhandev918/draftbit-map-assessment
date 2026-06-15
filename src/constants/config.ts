export const API_CONFIG = {
  BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL ?? 'https://api.example.com',
  TIMEOUT: 15_000,
} as const;

export const MAP_CONFIG = {
  DEFAULT_REGION: {
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
} as const;
