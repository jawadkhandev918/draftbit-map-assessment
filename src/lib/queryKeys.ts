export const queryKeys = {
  locations: {
    all: ['locations'] as const,
    detail: (id: string) => ['locations', id] as const,
  },
} as const;
