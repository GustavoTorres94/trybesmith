export type Product = {
  id: number;
  name: string;
  price: string;
  orderId: number;
};

export type ProductxablauType = {
  name: string;
  price: string;
  orderId: number;
};

export type ProductInsertType = {
  id: number;
  name: string;
  price: string;
};

export type ProductGetAllType = {
  id?: number;
  name: string;
  price: string;
  orderId: number;
};