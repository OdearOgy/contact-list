import { useState } from "react";
import { Cluster, Stack } from "../../components";
import styles from "./index.module.css";
import List from "./list";
import Search from "./search";

const Contacts = () => {
  const [search, setSearch] = useState("");

  return (
    <Cluster>
      <Stack className={styles.sidebar}>
        <div className={styles.header}>
          <Search search={search} setSearch={setSearch} />
        </div>
        <List search={search} />
      </Stack>
    </Cluster>
  );
};

export default Contacts;
