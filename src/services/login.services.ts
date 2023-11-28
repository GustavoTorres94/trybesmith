import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';
import { User, UserLogin } from '../types/User';

const SECRET_KEY = process.env.JWT_SECRET;

const payloadToken = (payload: User): string => {
  const token = jwt.sign(payload, SECRET_KEY as string);
  return token;
};

const validateLogin = async (username: string, password: string)
: Promise<UserLogin> => {
  if (!username || !password) {
    return { 
      status: 400,
      data: { message: '"username" and "password" are required' },
    };
  }
  const user = await UserModel.findOne({ where: { username } });
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }
  const token = payloadToken(user.dataValues);
  return { status: 200, data: { token } };
};

export default {
  validateLogin,
};