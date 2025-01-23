import { TrashIcon } from "@heroicons/react/24/solid";
import { useCallback, useState } from "react";
import { Button } from "../../../components";
import FormDialog from "../../../components/dialog";

const Delete = () => {
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
        title='Delete Contact'
        open={isOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      />
      <Button
        variant='danger'
        onClick={() => setIsOpen(true)}
        prefixIcon={<TrashIcon />}
      />
    </>
  );
};

export default Delete;
