import { Response, Request, NextFunction } from 'express';
import UserModel from '../database/models/user.model';

const verifyUserId = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.body;
  const user = await UserModel.findByPk(userId);
  if (!userId || userId === '') {
    return res.status(400).json({ message: '"userId" is required' });
  }
  if (typeof userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }
  if (!user) {
    return res.status(404).json({ message: '"userId" not found' });
  }
  next();
};

export default verifyUserId;