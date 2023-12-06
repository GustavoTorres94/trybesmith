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

export type OrderResponse = {
  userId: number;
  productIds: number[];
};

export type OrderProductResponse = {
  status: number;
  data: OrderResponse | { message: string };
};