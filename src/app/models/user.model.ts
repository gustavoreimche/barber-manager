export interface User {
  id?: string;
  companys?: Array<string>;
  name?: string;
  email: string;
  password: string;
  phone?: string;
  admin?: boolean;
  employee?: boolean;
}
