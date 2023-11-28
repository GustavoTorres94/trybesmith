import { Router } from 'express';
import loginController from '../controller/login.controller';
import verifyToken from '../middlewares/authToken';

const loginRoute = Router();

loginRoute.post('/login', verifyToken, loginController.login);

export default loginRoute;