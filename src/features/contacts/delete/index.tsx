import { TrashIcon } from "@heroicons/react/24/solid";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Button } from "../../../components";
import FormDialog from "../../../components/dialog";
import { useDeleteContactMutation } from "../_queries";

const Delete: FunctionComponent<{
  id: number;
}> = ({ id }) => {
  const queryClient = useQueryClient();
  const deleteMutation = useDeleteContactMutation(id, queryClient);

  const navigate = useNavigate({ from: "/contacts/$contactId" });
  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOk = useCallback(() => {
    deleteMutation.mutateAsync();
  }, [deleteMutation]);

  useEffect(() => {
    if (deleteMutation.isSuccess) {
      setIsOpen(false);
      navigate({ to: "/contacts" });
    }
  }, [deleteMutation, navigate]);

  return (
    <>
      <FormDialog
        title='Delete Contact'
        open={isOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      />
      <Button
        variant='danger'
        onClick={() => setIsOpen(true)}
        prefixIcon={<TrashIcon />}
        disabled={deleteMutation.isPending}
        loading={deleteMutation.isPending}
      />
    </>
  );
};

export default Delete;
