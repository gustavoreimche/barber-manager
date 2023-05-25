export interface User {
  id?: string;
  idCompanys?: Array<string>;
  name?: string;
  email: string;
  password: string;
  phone?: string;
  admin?: boolean;
  employee?: boolean;
}
