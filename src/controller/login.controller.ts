import { Request, Response } from 'express';
import loginServices from '../services/login.services';
import { Login } from '../types/Login';

const login = async (req: Request, res: Response) : Promise<Response | void> => {
  const { username, password }: Login = req.body;
  const { status, data } = await loginServices.validateLogin(username, password);
  if (status === 200) {
    const { token }: any = data;
    return res.status(status).json({ token });
  }
  return res.status(status).json(data);
};

export default {
  login,
};