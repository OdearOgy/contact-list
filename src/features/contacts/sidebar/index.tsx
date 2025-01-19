import { FunctionComponent } from "react";
import { Cluster, Stack } from "../../../components";
import { type Contact } from "../_queries";
import styles from "./index.module.css";

const getInitials = (name: string) => {
  const n = name?.trim().split(" ");

  if (!n?.[0]) {
    return "";
  }

  let initials = n?.[0]?.[0];

  if (n.length > 1) {
    initials += n?.[1]?.[0];
  }

  return initials.toUpperCase();
};

const ContactItem: FunctionComponent<{
  data: Contact;
}> = ({ data }) => {
  const { name, phone } = data;
  const initials = getInitials(name);

  return (
    <Cluster className="gap-2 items-center">
      <div className={styles.avatar}>
        <span>{initials}</span>
      </div>

      <Stack className={styles.body}>
        <h2>{name}</h2>
        <p> {phone}</p>
      </Stack>
    </Cluster>
  );
};

const Sidebar: FunctionComponent<{
  data: Contact[];
}> = ({ data }) => {
  return (
    <Stack className={styles.sidebar}>
      {data?.map((contact) => {
        return <ContactItem data={contact} key={contact.id} />;
      })}
    </Stack>
  );
};

export default Sidebar;
