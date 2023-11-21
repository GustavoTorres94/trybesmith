import { Router } from 'express';
import productsController from '../controller/products.controller';

const productsRoute = Router();

productsRoute.post('/products', productsController.insertProduct);
productsRoute.get('/products', productsController.getAllProducts);

export default productsRoute;