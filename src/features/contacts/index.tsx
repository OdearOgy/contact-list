import { useState } from "react";
import { Cluster, Stack } from "../../components";
import Add from "./add";
import styles from "./index.module.css";
import List from "./list";
import Search from "./search";

const Contacts = () => {
  const [search, setSearch] = useState("");

  return (
    <Cluster>
      <Stack className={styles.sidebar}>
        <Cluster className={styles.header}>
          <Search search={search} setSearch={setSearch} />
          <Add />
        </Cluster>
        <div className={styles.body}>
          <List search={search} />
        </div>
      </Stack>
    </Cluster>
  );
};

export default Contacts;
