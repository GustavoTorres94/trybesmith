import { ProductxablauType, ProductInsertType, Product } from '../../src/types/Product';

export const validBodyFunction: ProductxablauType = {
  name: 'xablau',
  price: '100',
  orderId: 4,
};

export const validBodyFunctionReturn: ProductInsertType = {
  id: 6,
  name: 'xablau',
  price: '100',
};

export const validBodyFunctionReturnGetAll: Product[] = [
  {
    id: 1,
    name: 'xablau',
    price: '100',
    orderId: 4,
  },
  {
    id: 2,
    name: 'xablau',
    price: '100',
    orderId: 4,
  },
  {
    id: 3,
    name: 'xablau',
    price: '100',
    orderId: 4,
  },
  {
    id: 4,
    name: 'xablau',
    price: '100',
    orderId: 4,
  },
  {
    id: 5,
    name: 'xablau',
    price: '100',
    orderId: 4,
  },
];