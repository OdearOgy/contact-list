import { useParams } from "@tanstack/react-router";
import { Avatar, Cluster, Cover, Stack } from "../../../components";
import { getInitials } from "../../../utils/get-initials";
import { useContactQuery } from "../_queries";
import Delete from "../delete";
import Edit from "../edit";
import styles from "./index.module.css";

const ContactDetails = () => {
  const { contactId } = useParams({ strict: false });

  const { data, isError, isPending } = useContactQuery(
    parseInt(contactId ?? "0"),
  );

  const initials = getInitials(data?.name ?? "");

  return (
    <Cover className='gap-2'>
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

          <Edit />
          <Delete />
        </Cluster>
      )}
    </Cover>
  );
};

export default ContactDetails;
