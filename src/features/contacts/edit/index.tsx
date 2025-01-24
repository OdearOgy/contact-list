import { PencilIcon } from "@heroicons/react/24/solid";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "../../../components";
import FormDialog from "../../../components/dialog";
import { useEditContactMutation } from "../_queries";
import { Contact, FormDataDto } from "../_queries/models";
import DetailsForm from "../details/form";

const Edit: FunctionComponent<{
  data: Contact;
}> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState<FormDataDto>(data);
  const formRef = useRef<HTMLFormElement | null>(null);

  const queryClient = useQueryClient();
  const editMutation = useEditContactMutation(data.id, edit, queryClient);
  const navigate = useNavigate({ from: "/contacts/$contactId" });

  const handleCancel = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOk = useCallback(() => {
    formRef?.current?.requestSubmit();
  }, []);

  const handleSubmit = useCallback(
    (formData: FormDataDto) => {
      setEdit((prevState) => {
        editMutation.mutate();
        return { ...prevState, ...formData };
      });
    },
    [setEdit, editMutation],
  );

  useEffect(() => {
    if (editMutation.isSuccess) {
      setIsOpen(false);
      navigate({
        to: "/contacts",
      });
    }
  }, [editMutation, navigate]);

  return (
    <>
      <FormDialog
        title='Edit Contact'
        open={isOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        loading={editMutation.isPending}
      >
        <DetailsForm formRef={formRef} data={edit} onSubmit={handleSubmit} />
      </FormDialog>
      <Button
        variant='primary'
        onClick={() => setIsOpen(true)}
        prefixIcon={<PencilIcon />}
        size='small'
      />
    </>
  );
};

export default Edit;
