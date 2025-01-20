import { API_URL } from "../../api/constants";
import { type Contact, type Filter } from "./models";

export const fetchContacts = async (filter?: Filter) => {
  console.log(filter);
  const search =
    filter && Object.keys(filter).length
      ? `?${new URLSearchParams(filter)}`
      : "";

  const response = await fetch(`${API_URL}/users${search}`);
  return (await response.json()) as Contact[];
};
