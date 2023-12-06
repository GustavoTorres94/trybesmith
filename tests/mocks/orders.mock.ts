import { OrderProduct, OrderResponse } from '../../src/types/Order';

export const ordersMockResponseAll: OrderProduct[] = [
  {
    "id": 1,
    "userId": 1,
    "productIds": [
      1,
      2
    ]
  },
  {
    "id": 2,
    "userId": 3,
    "productIds": [
      3,
      4
    ]
  },
  {
    "id": 3,
    "userId": 2,
    "productIds": [
      5
    ]
  }
];

export const ordersMockResponse: OrderResponse = {
  "userId": 1,
  "productIds": [
    1,
    2
  ]
};