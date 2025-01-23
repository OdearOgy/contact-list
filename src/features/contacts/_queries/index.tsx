import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  addContact,
  deleteContact,
  editContact,
  fetchContact,
  fetchContacts,
} from "./api";
import { FormDataDto } from "./models";

const CONTACTS_KEY = "CONTACTS";
const DETAILS_KEY = "CONTACT_DETAILS";
const DELETE_KEY = "DELETE_CONTACT";
const EDIT_KEY = "EDIT_CONTACT";
const ADD_KEY = "ADD_CONTACT";

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
    queryKey: [DETAILS_KEY, id],
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

export const useEditContactMutation = (
  id: number,
  formData: FormDataDto,
  queryClient: QueryClient,
) => {
  return useMutation({
    mutationKey: [EDIT_KEY],
    mutationFn: () => editContact(id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CONTACTS_KEY],
      });

      queryClient.invalidateQueries({
        queryKey: [DETAILS_KEY, id],
      });
    },
  });
};

export const useAddContactMutation = (
  formData: FormDataDto,
  queryClient: QueryClient,
) => {
  return useMutation({
    mutationKey: [ADD_KEY],
    mutationFn: () => addContact(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CONTACTS_KEY],
      });
    },
  });
};
