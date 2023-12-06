import { Response, Request, NextFunction } from 'express';

const verifyProducts = (req: Request, res: Response, next: NextFunction) => {
  const { productIds } = req.body;
  if (!productIds) {
    return res.status(400).json({ message: '"productIds" is required' });
  }
  if (!Array.isArray(productIds)) {
    return res.status(422).json({ message: '"productIds" must be an array' });
  }
  if (!productIds.every((id) => typeof id === 'number')) {
    return res.status(422).json({ message: '"productIds" must include only numbers' });
  }
  next();
};

export default verifyProducts;