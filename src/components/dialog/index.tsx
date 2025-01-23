import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FunctionComponent, PropsWithChildren, useCallback } from "react";
import Button from "../button";
import Cluster from "../cluster";

const FormDialog: FunctionComponent<
  PropsWithChildren<{
    title: string;
    open?: boolean;
    message?: string;
    onCancel?: () => void;
    onOk?: () => void;
    loading?: boolean;
  }>
> = ({ open, title, message, onCancel, onOk, loading, children }) => {
  const handleCancel = useCallback(() => {
    onCancel?.();
  }, [onCancel]);

  const handleOk = useCallback(() => {
    onOk?.();
  }, [onOk]);

  // TODO (hom): Move classnames into a css file
  return (
    <Dialog open={open} onClose={handleCancel} className='relative z-50'>
      <DialogBackdrop className='fixed inset-0 bg-neutral-900/50' />
      <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
        <DialogPanel className='rounded max-w-lg w-full  bg-neutral-50 p-5 py-7'>
          <DialogTitle>{title}</DialogTitle>
          <Description>{message}</Description>
          {children}
          <Cluster className='justify-end gap-2'>
            <Button
              onClick={handleCancel}
              variant='neutral'
              prefixIcon={<XMarkIcon />}
            >
              Cancel
            </Button>
            <Button
              onClick={handleOk}
              variant='primary'
              prefixIcon={<CheckIcon />}
              loading={loading}
              disabled={loading}
            >
              Ok
            </Button>
          </Cluster>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default FormDialog;
