export type Order = {
  id: number;
  userId: number;
  productId?: number;
};

export type OrderProduct = {
  id: number;
  userId: number;
  productIds: number[];
};