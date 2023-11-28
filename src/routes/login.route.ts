import { Router } from 'express';
import loginController from '../controller/login.controller';
// import verifyToken from '../middlewares/authToken';

const loginRoute = Router();

loginRoute.post('/', loginController.login);

export default loginRoute;