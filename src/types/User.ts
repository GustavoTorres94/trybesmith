import { Token } from './Login';

export type User = {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
};

export type UserLogin = {
  status: number;
  data: Token | { message: string };
};
