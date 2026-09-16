export type Product = {
  id: string;
  name: string;
  categoryId: string;
  brand: string;
  description: string;
  image: string;
  basePrice: number;
  discountedPrice: number;
  discountPercentage: number;
  unit: string;
  stockQty: number;
  sku: string;
  active: boolean;
  deliveryMins: number;
  bulkTiers?: BulkTier[];
};

export type BulkTier = {
  minQty: number;
  pricePerUnit: number;
};

export type Category = {
  id: string;
  name: string;
  image: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
