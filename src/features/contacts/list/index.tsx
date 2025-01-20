import { FunctionComponent } from "react";
import { Stack } from "../../../components";
import { useContactsQuery } from "../_queries";
import styles from "./index.module.css";
import ContactItem from "./item";

const List: FunctionComponent<{
  search: string;
}> = ({ search }) => {
  const { data, isError, isPending } = useContactsQuery(search);

  if (isPending) {
    return <div>loading ....</div>;
  }

  if (isError) {
    return <div>some random error</div>;
  }

  return (
    <Stack className={styles.list}>
      {data?.map((contact) => {
        return <ContactItem data={contact} key={contact.id} />;
      })}
    </Stack>
  );
};

export default List;
