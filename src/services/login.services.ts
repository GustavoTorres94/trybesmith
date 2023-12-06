import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';
import { UserLogin } from '../types/User';
import { Payload } from '../types/Login';

const SECRET_KEY = process.env.JWT_SECRET || 'secret';

const payloadToken = (payload: Payload): string => {
  const token = jwt.sign(payload, SECRET_KEY);
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
  const userPayload: Payload = {
    id: user.dataValues.id,
    username: user.dataValues.username,
  };
  const token = payloadToken(userPayload);
  return { status: 200, data: { token } };
};

export default {
  validateLogin,
  payloadToken,
};