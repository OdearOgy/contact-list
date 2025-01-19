import { API_URL } from "../api/constants";

export const FetchContacts = async () => {
  const response = await fetch(`${API_URL}/users`);
  return await response.json();
};

// export const AddContact = async (contact: { name: string }) => {
//   const response = await fetch(`${API_URL}/users`, {
//     method: "POST",
//     body: { ...contact },
//   });
// };
