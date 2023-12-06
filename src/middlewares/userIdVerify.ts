import { Response, Request, NextFunction } from 'express';

const verifyUserId = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ message: 'message": ""userId" is required' });
  }
  if (typeof userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }
  next();
};

export default verifyUserId;