import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import UserModel from '../database/models/user.model';
import { Order, OrderProductResponse } from '../types/Order';

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

const validateCreateOrder = async (id: number, productIds: number[], userId: number)
: Promise<OrderProductResponse> => {
  if (id !== userId) {
    return { status: 401, data: { message: 'Usuário não autorizado' } };
  }
  const user = await UserModel.findByPk(userId);
  if (!user) {
    return { status: 404, data: { message: '"userId" not found' } };
  }
  const order = await OrderModel.create({ userId });
  const { dataValues: { id: orderId } } = order;
  await Promise.all(productIds.map(async (productId) => {
    await ProductModel.update({ orderId }, { where: { id: productId } });
  }));
  return { status: 201, data: { userId, productIds } };
};

export default {
  validateGetAllOrders,
  validateCreateOrder,
};