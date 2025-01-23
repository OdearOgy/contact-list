export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
}

export type Filter = {
  q: string;
};

export interface FormDataDto {
  name: string;
  phone: string;
}
