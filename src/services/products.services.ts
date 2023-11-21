import ProductModel from '../database/models/product.model';
import { ProductxablauType, ProductInsertType } from '../types/Product';

const validateInsertProduct = async (product: ProductxablauType)
: Promise<{ data: ProductInsertType }> => {
  const { name, price, orderId } = product;
  const { dataValues } = await ProductModel.create({ name, price, orderId });
  const { id } = dataValues;
  return { data: { id, name, price } };
};

export default {
  validateInsertProduct,
};
