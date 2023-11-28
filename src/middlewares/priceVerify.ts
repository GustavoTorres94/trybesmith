import { Request, Response, NextFunction } from 'express';

const priceVerify = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body;
  if (!price) {
    return res.status(400).json({ message: '"price" is required' });
  }
  if (price.length <= 3) {
    return res.status(422).json({ message: '"price" length must be at least 3 characters long' });
  }
  if (typeof price !== 'string') {
    return res.status(422).json({ message: '"price" must be a string' });
  }
  next();
};

export default priceVerify;