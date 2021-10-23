export interface Authorization {
  id: number;
  roles: string[];
  iat?: number;
  exp?: number;
}
