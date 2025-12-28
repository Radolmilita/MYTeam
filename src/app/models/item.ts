export type ItemCategory = 'Hardware' | 'Software' | 'Service';

export interface Item {
  id: number;
  name: string;
  category: ItemCategory;
  priceUsd: number;
  inStock: number;
  updatedAtIso: string;
}
