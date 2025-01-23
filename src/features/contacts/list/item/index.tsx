import { useNavigate } from "@tanstack/react-router";
import { FunctionComponent, useCallback } from "react";
import { Avatar, Cluster, Stack } from "../../../../components";
import { getInitials } from "../../../../utils/get-initials";
import { Contact } from "../../_queries/models";
import styles from "./index.module.css";

const ContactItem: FunctionComponent<{
  data: Contact;
}> = ({ data }) => {
  const navigate = useNavigate({ from: "/contacts" });

  const { name, phone, id } = data;
  const initials = getInitials(name);

  const handleDetailsNavigation = useCallback(() => {
    navigate({
      to: "/contacts/$contactId",
      params: { contactId: id.toString() },
    });
  }, [id, navigate]);

  return (
    <Cluster className={styles.item} onClick={handleDetailsNavigation}>
      <Avatar initials={initials} name={name} />
      <Stack className={styles.body}>
        <h2 title={name}>{name}</h2>
        <p title={phone}> {phone}</p>
      </Stack>
    </Cluster>
  );
};

export default ContactItem;
