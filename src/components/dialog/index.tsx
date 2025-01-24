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
import styles from "./index.module.css";

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

  return (
    <Dialog open={open} onClose={handleCancel} className={styles.dialog}>
      <DialogBackdrop className={styles.backdrop} />
      <div className={styles.panelWrapper}>
        <DialogPanel className={styles.panel}>
          <DialogTitle className={styles.title}>{title}</DialogTitle>
          <Description className={styles.description}>{message}</Description>
          <div className={styles.body}>{children}</div>
          <Cluster className={styles.footer}>
            <Button
              onClick={handleCancel}
              variant='neutral'
              prefixIcon={<XMarkIcon />}
              disabled={loading}
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
