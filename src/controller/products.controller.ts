import { Request, Response } from 'express';
import productsService from '../services/products.services';
import { ProductxablauType } from '../types/Product';

const insertProduct = async (req: Request, res: Response) : Promise<Response | void> => {
  const { name, price, orderId }: ProductxablauType = req.body;
  const { data } = await productsService.validateInsertProduct({ name, price, orderId });
  return res.status(201).json(data);
};

export default {
  insertProduct,
};