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

export interface ICreatePub {
  description: string;
  image: File;
  user: number;
}

export interface IUpdatePub {
  description?: string;
  image?: File;
}

export interface IPubProps {
  pub: IPublication;
}
