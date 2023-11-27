import { Response, Request } from 'express';
import ordersService from '../services/orders.services';

const getAllOrders = async (_req: Request, res: Response) : Promise<Response | void> => {
  const { data } = await ordersService.validateGetAllOrders();
  return res.status(200).json(data);
};

export default {
  getAllOrders,
};