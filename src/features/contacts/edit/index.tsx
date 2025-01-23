import { PencilIcon } from "@heroicons/react/24/solid";
import { useCallback, useState } from "react";
import { Button } from "../../../components";
import FormDialog from "../../../components/dialog";

const Edit = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOk = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <FormDialog
        title='Edit Contact'
        open={isOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      />
      <Button
        variant='primary'
        onClick={() => setIsOpen(true)}
        prefixIcon={<PencilIcon />}
      />
    </>
  );
};

export default Edit;
