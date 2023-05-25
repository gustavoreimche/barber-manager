export interface Client {
  id?: string;
  idCompany?: string;
  name: string;
  phone: string | null;
  address?: string;
  debit?: number | null;
  num?: number | null;
  pg?: string;
  squad?: string;
}
