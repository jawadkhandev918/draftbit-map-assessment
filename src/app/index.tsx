import { useCallback, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { useRouter } from 'expo-router';

import { MapMarkerItem } from '@/components/map/MapMarkerItem';
import { ErrorScreen } from '@/components/ui/ErrorScreen';
import { MapSkeleton } from '@/components/ui/MapSkeleton';
import { MAP_CONFIG } from '@/constants/config';
import { useLocations } from '@/hooks/useLocations';
import type { Location } from '@/types';

const EDGE_PADDING = { top: 80, right: 60, bottom: 80, left: 60 };

export default function MapScreen() {
  const router = useRouter();
  const mapRef = useRef<MapView>(null);
  const { data: locations, isLoading, error, refetch } = useLocations();

  const fitMapToMarkers = useCallback(() => {
    if (!locations?.length) return;

    const coords = locations.map((l) => ({
      latitude: l.latitude,
      longitude: l.longitude,
    }));

    mapRef.current?.fitToCoordinates(coords, {
      edgePadding: EDGE_PADDING,
      animated: true,
    });
  }, [locations]);

  const handleMarkerPress = useCallback(
    (location: Location) => {
      router.push(`/location/${location.id}`);
    },
    [router],
  );

  if (isLoading) {
    return <MapSkeleton />;
  }

  if (error) {
    return <ErrorScreen message={error.message} onRetry={refetch} />;
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={MAP_CONFIG.DEFAULT_REGION}
        showsUserLocation
        showsMyLocationButton
        onMapReady={fitMapToMarkers}
      >
        {locations?.map((location) => (
          <MapMarkerItem key={location.id} location={location} onPress={handleMarkerPress} />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
