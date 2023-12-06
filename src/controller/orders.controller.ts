import { Response, Request } from 'express';
import ordersService from '../services/orders.services';

const getAllOrders = async (_req: Request, res: Response) : Promise<Response | void> => {
  const { data } = await ordersService.validateGetAllOrders();
  return res.status(200).json(data);
};

const createOrder = async (req: Request, res: Response) : Promise<Response | void> => {
  const { decoded, productIds, userId } = req.body;
  const { id } = decoded;
  const { data } = await ordersService.validateCreateOrder(id, productIds, userId);
  return res.status(201).json(data);
};

export default {
  getAllOrders,
  createOrder,
};