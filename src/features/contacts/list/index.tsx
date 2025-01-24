import { FunctionComponent } from "react";
import { Stack } from "../../../components";
import { useContactsQuery } from "../_queries";
import styles from "./index.module.css";
import ContactItem from "./item";

const List: FunctionComponent<{
  search: string;
}> = ({ search }) => {
  const { data, isError, isPending, isSuccess } = useContactsQuery(search);
  const noDataFound = isSuccess && !data.length;

  return (
    <Stack className={styles.list}>
      {isPending ? (
        [1, 2, 3]?.map((contact) => {
          return <ContactItem key={contact} loading />;
        })
      ) : isError ? (
        <div>some random error</div>
      ) : noDataFound ? (
        <div>no data found</div>
      ) : (
        data?.map((contact) => {
          return <ContactItem data={contact} key={contact.id} />;
        })
      )}
    </Stack>
  );
};

export default List;
