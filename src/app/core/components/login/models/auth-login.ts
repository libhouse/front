import { IClaims } from "./claims";
import { IUserData } from "./user-login"

export interface IAuthLogin{
  user: IUserData;
  accessToken: string;
  expiresInAccessToken: Date;
  refreshToken: string;
  expiresInRefreshToken: Date;
  claims: Array<IClaims>;
}
