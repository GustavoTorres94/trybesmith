import { Router } from 'express';
import ordersController from '../controller/orders.controller';
import veryfyToken from '../middlewares/authToken';
import verifyProducts from '../middlewares/productsVerify';
import verifyUserId from '../middlewares/userIdVerify';

const ordersRoute = Router();

ordersRoute.get('/', ordersController.getAllOrders);
ordersRoute.post('/', veryfyToken, verifyProducts, verifyUserId, ordersController.createOrder);

export default ordersRoute;