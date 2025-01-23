import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useParams } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { Avatar, Button, Cluster, Cover, Stack } from "../../../components";
import FormDialog from "../../../components/dialog";
import { getInitials } from "../../../utils/get-initials";
import { useContactQuery } from "../_queries";
import styles from "./index.module.css";

const ContactDetails = () => {
  const { contactId } = useParams({ strict: false });
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const { data, isError, isPending } = useContactQuery(
    parseInt(contactId ?? "0"),
  );

  const initials = getInitials(data?.name ?? "");

  const handleEditCancel = useCallback(() => {
    setIsEditOpen(false);
  }, []);

  const handleEditOk = useCallback(() => {
    setIsEditOpen(false);
  }, []);

  const handleDeleteCancel = useCallback(() => {
    setIsDeleteOpen(false);
  }, []);

  const handleDeleteOk = useCallback(() => {
    setIsDeleteOpen(false);
  }, []);

  return (
    <Cover className='gap-2'>
      <FormDialog
        title='Edit Contact'
        message='Are you you want to delete this item?'
        open={isEditOpen}
        onCancel={handleEditCancel}
        onOk={handleEditOk}
      />

      <FormDialog
        title='Delete Contact'
        message='Are you you want to delete this item?'
        open={isDeleteOpen}
        onCancel={handleDeleteCancel}
        onOk={handleDeleteOk}
      />

      {isPending ? (
        <div>loading ....</div>
      ) : isError ? (
        <div>some random error</div>
      ) : (
        <Cluster className={styles.card}>
          <Avatar initials={initials} name={data?.name ?? ""} size='large' />
          <Stack className={styles.body}>
            <h2>{data.name}</h2>
            <p>{data.phone}</p>
          </Stack>

          <Button
            variant='neutral'
            onClick={() => {
              setIsEditOpen(true);
            }}
            prefixIcon={<PencilIcon />}
          />

          <Button
            variant='danger'
            onClick={() => {
              setIsDeleteOpen(true);
            }}
            prefixIcon={<TrashIcon />}
          />
        </Cluster>
      )}
    </Cover>
  );
};

export default ContactDetails;
