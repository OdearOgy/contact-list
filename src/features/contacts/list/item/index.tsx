import { useNavigate, useParams } from "@tanstack/react-router";
import { FunctionComponent, useCallback } from "react";
import { Avatar, Cluster, Stack } from "../../../../components";
import { getInitials } from "../../../../utils/get-initials";
import { Contact } from "../../_queries/models";
import styles from "./index.module.css";

const EMPTY = {
  id: "",
  name: "",
  phone: "",
};

const ContactItem: FunctionComponent<{
  data?: Contact;
  loading?: boolean;
}> = ({ data, loading }) => {
  const navigate = useNavigate({ from: "/contacts" });
  const params = useParams({ strict: false });
  const contactId = parseInt(params.contactId ?? "");

  const { name, phone, id } = data ?? EMPTY;
  const initials = getInitials(name);

  const handleDetailsNavigation = useCallback(() => {
    navigate({
      to: "/contacts/$contactId",
      params: { contactId: id.toString() },
    });
  }, [id, navigate]);

  const itemCls = `${styles.item} ${contactId === id ? styles.selected : ""} ${loading ? `${styles.loading} animate-pulse` : ""}`;

  return (
    <Cluster className={itemCls} onClick={handleDetailsNavigation}>
      <Avatar initials={initials} name={name} loading={loading} />
      <Stack className={styles.body}>
        <h2 title={name}>{name}</h2>
        <p title={phone?.toString()}>{phone}</p>
      </Stack>
    </Cluster>
  );
};

export default ContactItem;
