import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { InfoRow } from '@/components/location/InfoRow';
import { LocationDetailSkeleton } from '@/components/location/LocationDetailSkeleton';
import { Card } from '@/components/ui/Card';
import { EmptyState } from '@/components/ui/EmptyState';
import { ErrorScreen } from '@/components/ui/ErrorScreen';
import { IconButton } from '@/components/ui/IconButton';
import { Spacing } from '@/constants/spacing';
import { useLocation } from '@/hooks/useLocations';
import { useTheme } from '@/hooks/useTheme';
import type { Location } from '@/types';

const DETAIL_MAP_DELTA = 0.01;

function LocationContent({ location }: { location: Location }) {
  const { theme } = useTheme();

  return (
    <>
      <Text style={[styles.name, { color: theme.text }]}>{location.name}</Text>
      <Text style={[styles.description, { color: theme.textSecondary }]}>
        {location.description}
      </Text>

      <Card>
        <Text style={[styles.cardHeader, { color: theme.text }]}>Coordinates</Text>
        <View style={[styles.divider, { backgroundColor: theme.border }]} />
        <InfoRow icon="navigate-outline" label="Latitude" value={location.latitude.toFixed(6)} />
        <InfoRow icon="compass-outline" label="Longitude" value={location.longitude.toFixed(6)} />
      </Card>

      <Card>
        <Text style={[styles.cardHeader, { color: theme.text }]}>Details</Text>
        <View style={[styles.divider, { backgroundColor: theme.border }]} />
        <InfoRow icon="finger-print-outline" label="ID" value={location.id} />
      </Card>
    </>
  );
}

export default function LocationDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  const { data: location, isLoading, error, refetch } = useLocation(id ?? '');

  if (isLoading) {
    return <LocationDetailSkeleton />;
  }

  if (error) {
    if (error.isNotFound) {
      return (
        <EmptyState
          icon="location-outline"
          title="Location Not Found"
          subtitle={`No location exists with ID "${id}". It may have been removed.`}
        />
      );
    }
    return <ErrorScreen message={error.message} onRetry={refetch} />;
  }

  if (!location) {
    return (
      <EmptyState
        icon="location-outline"
        title="No Data Available"
        subtitle="This location has no data to display."
      />
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: DETAIL_MAP_DELTA,
          longitudeDelta: DETAIL_MAP_DELTA,
        }}
        scrollEnabled={false}
        zoomEnabled={false}
        pitchEnabled={false}
        rotateEnabled={false}
      >
        <Marker
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title={location.name}
        />
      </MapView>

      <IconButton
        icon="arrow-back"
        style={[styles.backButton, { top: insets.top + Spacing.sm + 2 }]}
        onPress={() => router.back()}
      />

      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + Spacing.lg },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <LocationContent location={location} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: 280,
  },
  backButton: {
    position: 'absolute',
    left: Spacing.md,
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    padding: Spacing.lg,
    gap: Spacing.md,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  cardHeader: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.md - 2,
    paddingBottom: Spacing.sm + 2,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
  },
});
