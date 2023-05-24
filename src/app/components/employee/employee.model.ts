export interface Employee {
  id?: string;
  name: string;
  email: string;
  phone: string | null;
  admin: boolean;
  employee: boolean;
  companys: string;
}