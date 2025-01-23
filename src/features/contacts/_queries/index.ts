import { useQuery } from "@tanstack/react-query";
import { fetchContact, fetchContacts } from "./api";

const CONTACTS_KEY = "contacts";

export const useContactsQuery = (search: string) => {
  return useQuery({
    queryKey: [CONTACTS_KEY, search],
    queryFn: () =>
      fetchContacts({
        q: search ?? "",
      }),
  });
};

export const useContactQuery = (id: number) => {
  return useQuery({
    queryKey: [CONTACTS_KEY, id],
    queryFn: () => fetchContact(id),
  });
};
