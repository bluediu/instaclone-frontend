export interface IUserToken {
  user_id: number;
  username: string;
  first_name?: string;
  last_name?: string;
  email: string;
  avatar?: string;
}

export interface IUser {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  description: string;
  website: string;
  is_active: boolean;
  is_staff: boolean;
  date_joined: Date;
  updated_at: Date;
}

export interface IUpdateUser {
  first_name: string;
  last_name: string;
  description: string;
  website: string;
}

export interface IUploadAvatar {
  avatar: File;
}

export interface IAuthUser {
  refresh: string;
  access: string;
  user_id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}
