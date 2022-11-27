export interface RegisterBody {
  login: string;
  password: string;
  email: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface User {
  token: string;
  id: number;
  email: string;
  login: string;
  isSuperUser: boolean;
}
