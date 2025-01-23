export interface Contact {
  id: number;
  name: string;
  phone: string;
}

export type Filter = {
  q: string;
};

export interface FormDataDto {
  name: string;
  phone: string;
}
