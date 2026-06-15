/**
 * Matches the worker's Location response shape exactly.
 * Single source of truth — keep in sync with worker/src/types.ts.
 */
export interface Location {
  id: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = 'ApiError';
  }

  get isNotFound() {
    return this.status === 404;
  }
}
