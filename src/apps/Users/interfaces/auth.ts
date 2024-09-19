export interface ILogin {
  email: string;
  password: string;
}

export interface ISignUp extends ILogin {
  first_name: string;
  last_name: string;
  email: string;
  repeat_password: string;
}
