export interface Contact {
  id: number;
  name: string;
  phone: number;
}

export type Filter = {
  q: string;
};

export interface FormDataDto {
  id: number | null;
  name: string | null;
  phone: number | null;
}
