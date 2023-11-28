import { Router } from 'express';
import productsController from '../controller/products.controller';
import nameVerify from '../middlewares/nameVerify';
import priceVerify from '../middlewares/priceVerify';

const productsRoute = Router();

productsRoute.post('/', nameVerify, priceVerify, productsController.insertProduct);
productsRoute.get('/', productsController.getAllProducts);

export default productsRoute;