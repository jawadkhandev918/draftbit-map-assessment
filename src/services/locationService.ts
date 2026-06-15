import { ApiError } from '@/types';
import type { Location } from '@/types';

import api from './api';

export const locationService = {
  getLocations: async (): Promise<Location[]> => {
    const { data } = await api.get<Location[]>('/locations');
    return data;
  },

  getLocationById: async (id: string): Promise<Location> => {
    const locations = await locationService.getLocations();
    const location = locations.find((l) => l.id === id);
    if (!location) {
      throw new ApiError(`Location with id "${id}" not found`, 404);
    }
    return location;
  },
};
