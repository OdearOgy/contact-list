import { PlusIcon } from "@heroicons/react/24/solid";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../../../components";
import FormDialog from "../../../components/dialog";
import { useAddContactMutation } from "../_queries";
import { Contact } from "../_queries/models";
import DetailsForm from "../details/form";

const Add = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState({
    id: 0,
    name: "",
    phone: "",
  });
  const formRef = useRef<HTMLFormElement | null>(null);

  const queryClient = useQueryClient();
  const addMutation = useAddContactMutation(edit, queryClient);
  const navigate = useNavigate({ from: "/contacts" });

  const handleCancel = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOk = useCallback(() => {
    formRef?.current?.requestSubmit();
  }, []);

  const handleSubmit = useCallback(
    (formData: Contact) => {
      setEdit((prevState) => {
        addMutation.mutate();
        return { ...prevState, ...formData };
      });
    },
    [setEdit, addMutation],
  );

  useEffect(() => {
    if (addMutation.isSuccess) {
      setIsOpen(false);
      navigate({
        to: "/contacts/$contactId",
        params: {
          contactId: addMutation.data.id?.toString(),
        },
      });
    }
  }, [addMutation, navigate]);

  return (
    <>
      <FormDialog
        title='Add Contact'
        open={isOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <DetailsForm formRef={formRef} onSubmit={handleSubmit} />
      </FormDialog>
      <Button
        variant='primary'
        onClick={() => setIsOpen(true)}
        prefixIcon={<PlusIcon />}
      />
    </>
  );
};

export default Add;
