import type { JwtPayload } from 'jwt-decode';
import jwt_decode from 'jwt-decode';

export const verifyJwt = (jwt?: string): boolean => {
  if (jwt) {
    const decoded: JwtPayload = jwt_decode(jwt);
    if (decoded.exp && decoded.exp > Date.now() / 1000) {
      return true;
    }
  }
  return false;
};
