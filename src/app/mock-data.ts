import { Item } from './models/item';

export const MOCK_ITEMS: Item[] = [
  { id: 1, name: 'Keyboard Pro', category: 'Hardware', priceUsd: 129, inStock: 42, updatedAtIso: '2025-12-01T10:15:00Z' },
  { id: 2, name: 'Mouse X', category: 'Hardware', priceUsd: 79, inStock: 120, updatedAtIso: '2025-12-10T09:00:00Z' },
  { id: 3, name: 'Design System License', category: 'Software', priceUsd: 299, inStock: 999, updatedAtIso: '2025-11-20T15:30:00Z' },
  { id: 4, name: 'Onboarding Package', category: 'Service', priceUsd: 499, inStock: 7, updatedAtIso: '2025-12-22T08:00:00Z' },
  { id: 5, name: 'Cloud Backup', category: 'Service', priceUsd: 199, inStock: 18, updatedAtIso: '2025-12-18T12:00:00Z' },
];
