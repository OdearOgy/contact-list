import { API_URL } from "../../api/constants";
import { type Contact, type Filter } from "./models";

export const fetchContacts = async (filter?: Filter) => {
  const search =
    filter && Object.keys(filter).length
      ? `?${new URLSearchParams(filter)}`
      : "";

  const response = await fetch(`${API_URL}/users${search}`);
  return (await response.json()) as Contact[];
};

export const fetchContact = async (id: number) => {
  const response = await fetch(`${API_URL}/users/${id}`);
  return (await response.json()) as Contact;
};
