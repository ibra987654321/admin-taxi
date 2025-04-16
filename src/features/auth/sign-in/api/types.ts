import { User } from '~entities/shared/user';

export interface ApiSignInData {
  email: string;
  password: string;
  twoFactorToken: string;
}

export interface ApiSignInResponseData {
  token: string;
  expiresIn: number;
  tokenType: string;
  authState: User;
}
