import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET;

const bearerToken = (authorization: string): string => authorization.split(' ')[1];

const veryfyToken = (req: Request, res: Response, next: NextFunction): void => {
  const { authorization }: any = req.headers;
  const token = authorization;
  const decoded = jwt.verify(token, SECRET_KEY as string);
  next();
};

export default veryfyToken;