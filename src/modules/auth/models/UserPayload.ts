export interface UserPayload {
  sub: string;
  usernameOrEmail: string;
  iat?: number;
  exp?: number;
}
