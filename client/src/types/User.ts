export interface User {
  token: string;
  id: number;
  email: string;
  login: string;
  isSuperUser: boolean;
}

export interface RegisterBody {
  login: string;
  email: string;
  password: string;
}

export interface LoginBody {
  email: string;
  password: string;
}
