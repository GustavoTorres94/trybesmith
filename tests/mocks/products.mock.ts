import { ProductxablauType, ProductInsertType } from '../../src/types/Product';

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