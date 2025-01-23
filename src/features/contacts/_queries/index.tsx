import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { deleteContact, fetchContact, fetchContacts } from "./api";

const CONTACTS_KEY = "CONTACTS";
const DETAILS_KEY = "DETAILS";
const DELETE_KEY = "DELETE_CONTACT";

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
    queryKey: [DETAILS_KEY],
    queryFn: () => fetchContact(id),
  });
};

export const useDeleteContactMutation = (
  id: number,
  queryClient: QueryClient,
) => {
  return useMutation({
    mutationKey: [DELETE_KEY],
    mutationFn: () => deleteContact(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CONTACTS_KEY],
      });
    },
  });
};
