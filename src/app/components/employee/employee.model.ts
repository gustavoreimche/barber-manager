export interface Employee {
  id?: string;
  name: string;
  email: string;
  phone: string | null;
  password: string;
  admin: boolean;
  employee: boolean;
  companys: string;
}