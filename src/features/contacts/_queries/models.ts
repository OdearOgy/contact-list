export interface Contact {
  id: number;
  name: string;
  phone: number;
}

export type Filter = {
  q: string;
};

export interface FormDataDto {
  name: string;
  phone: number;
}
