import ProductModel from '../database/models/product.model';
import { ProductxablauType, ProductInsertType, Product } from '../types/Product';

const validateInsertProduct = async (product: ProductxablauType)
: Promise<{ data: ProductInsertType }> => {
  const { name, price, orderId } = product;
  const { dataValues } = await ProductModel.create({ name, price, orderId });
  const { id } = dataValues;
  return { data: { id, name, price } };
};

const validateGetAllProducts = async () : Promise<{ data: Product[] }> => {
  const products = await ProductModel.findAll();
  const filteredProducts = products.map((product) => product.dataValues);
  return { data: filteredProducts };
};

export default {
  validateInsertProduct,
  validateGetAllProducts,
};
