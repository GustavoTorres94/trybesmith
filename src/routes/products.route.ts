import { Router } from 'express';
import productsController from '../controller/products.controller';

const productsRoute = Router();

productsRoute.post('/products', productsController.insertProduct);

export default productsRoute;