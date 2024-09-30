/* Interfaces */
import { IUser } from '../../Users/interfaces';

export interface IPublication {
  code: string;
  image: string;
  description: string;
  user: IUser;
  created_at: Date;
  updated_at: Date;
}

export interface IPubProps {
  pub: IPublication;
}
