export interface FilterAdDto {
  brand?: string;
  model?: string;
  color?: string;
  year?: number;
  fuel?: string;
  minKm?: number;
  maxKm?: number;
  minPrice?: number;
  maxPrice?: number;
  page: number;
  perPage: number;
}
