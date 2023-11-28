import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET;

const veryfyToken = (req: Request, res: Response, next: NextFunction): void => {
  const { authorization }: any = req.headers;
  const token = authorization;
  const decoded = jwt.verify(token, SECRET_KEY as string);
  console.log('DECODED', decoded);
  next();
};

export default veryfyToken;