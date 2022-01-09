export interface RegisterUser {
  id: string;
  name: string;
  email: string;
  password: string;
  accountType: number;
}

export interface Login {
  email: string;
  password: string;
}

export interface ForgotPwd {
  email: string;
  password: string;
}