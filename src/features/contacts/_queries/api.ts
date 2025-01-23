import { API_URL } from "../../api/constants";
import { FormDataDto, type Contact, type Filter } from "./models";

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

export const deleteContact = async (id: number) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};

export const editContact = async (id: number, formData: FormDataDto) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    body: JSON.stringify(formData),
    method: "PUT",
  });
  return (await response.json()) as Contact;
};

export const addContact = async (formData: FormDataDto) => {
  const response = await fetch(`${API_URL}/users`, {
    body: JSON.stringify(formData),
    method: "POST",
  });
  return (await response.json()) as Contact;
};
