import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/lib/queryKeys';
import { locationService } from '@/services/locationService';
import type { ApiError, Location } from '@/types';

export function useLocations() {
  return useQuery<Location[], ApiError>({
    queryKey: queryKeys.locations.all,
    queryFn: locationService.getLocations,
  });
}

export function useLocation(id: string) {
  return useQuery<Location, ApiError>({
    queryKey: queryKeys.locations.detail(id),
    queryFn: () => locationService.getLocationById(id),
    enabled: !!id,
  });
}
