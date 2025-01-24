import { useParams } from "@tanstack/react-router";
import { FunctionComponent } from "react";
import { Avatar, Cluster, Cover, Stack } from "../../../components";
import { getInitials } from "../../../utils/get-initials";
import { useContactQuery } from "../_queries";
import { Contact } from "../_queries/models";
import Delete from "../delete";
import Edit from "../edit";
import styles from "./index.module.css";

const EMPTY = {
  id: 0,
  name: "",
  phone: 0,
};

const Card: FunctionComponent<{ data?: Contact; loading?: boolean }> = ({
  data = EMPTY,
  loading,
}) => {
  const initials = getInitials(data?.name ?? "");

  const cardCls = `${styles.card} ${loading ? `${styles.loading} animate-pulse` : ""}`;

  return (
    <Stack className={cardCls}>
      <Avatar
        initials={initials}
        name={data?.name ?? ""}
        size='large'
        loading={loading}
      />

      <Stack className='gap-1 items-center'>
        <Stack className={styles.body}>
          <h2>{data.name}</h2>
          <p>{data.phone}</p>
        </Stack>

        {data.id ? (
          <Cluster className={styles.actions}>
            <Edit data={data} />
            <Delete id={data.id} />
          </Cluster>
        ) : null}
      </Stack>
    </Stack>
  );
};

const ContactDetails = () => {
  const params = useParams({ strict: false });
  const contactId = parseInt(params.contactId ?? "");
  const { data, isError, isSuccess, isPending } = useContactQuery(contactId!);
  const noDataFound = isSuccess && !data?.id && !data?.name;

  return (
    <Cover className={styles.wrapper}>
      {isPending ? (
        <Card loading />
      ) : isError ? (
        <div>some random error</div>
      ) : noDataFound ? (
        <div>no data found</div>
      ) : (
        <Card data={data} />
      )}
    </Cover>
  );
};

export default ContactDetails;
