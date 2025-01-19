import { API_URL } from "../api/constants";

export type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
};

export const FetchContacts = async () => {
  const response = await fetch(`${API_URL}/users`);
  return (await response.json()) as Contact[];
};
