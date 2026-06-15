import { memo } from 'react';
import { Marker } from 'react-native-maps';

import type { Location } from '@/types';

interface MapMarkerItemProps {
  location: Location;
  onPress?: (location: Location) => void;
}

export const MapMarkerItem = memo(function MapMarkerItem({
  location,
  onPress,
}: MapMarkerItemProps) {
  return (
    <Marker
      coordinate={{ latitude: location.latitude, longitude: location.longitude }}
      title={location.name}
      description={location.description}
      onPress={() => onPress?.(location)}
    />
  );
});
