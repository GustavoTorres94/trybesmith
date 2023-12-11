import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ErrorOrderProduct } from '../types/Errors';

const SECRET_KEY = process.env.JWT_SECRET || 'secret';

const veryfyToken = (req: Request, res: Response, next: NextFunction)
: ErrorOrderProduct | unknown => {
  const { authorization }: any = req.headers;
  try {
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const token = authorization;

    const decoded = jwt.verify(token, SECRET_KEY);
    req.body.decoded = decoded;
    next();
  } catch (err: any) { 
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default veryfyToken;