import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';

const validateGetAllOrders = async () : Promise<{ data: Order[] }> => {
  const orders = await OrderModel.findAll();
  const filteredOrdersId = orders.map((order) => order.dataValues);
  const filteredOrders = await Promise.all(filteredOrdersId.map(async (order) => {
    const products = await ProductModel.findAll({ where: { orderId: order.id } });
    const filteredProducts = products.map((product) => product.dataValues.id);
    return { ...order, productIds: filteredProducts };
  }));
  return { data: filteredOrders };
};

export default {
  validateGetAllOrders,
};