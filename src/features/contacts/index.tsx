import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { Button, Cluster, Stack } from "../../components";
import Add from "./add";
import styles from "./index.module.css";
import List from "./list";
import Search from "./search";

const Contacts = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate({ from: "/contacts" });

  const handleBackClick = useCallback(() => {
    navigate({
      to: "/",
    });
  }, [navigate]);

  return (
    <Cluster>
      <Stack className={styles.sidebar}>
        <Cluster className={styles.header}>
          <div className={styles.back}>
            <Button
              size='small'
              prefixIcon={<ArrowLeftIcon />}
              onClick={handleBackClick}
            />
          </div>
          <Search search={search} setSearch={setSearch} />
          <div className={styles.add}>
            <Add />
          </div>
        </Cluster>
        <div className={styles.body}>
          <List search={search} />
        </div>
      </Stack>
      <Outlet />
    </Cluster>
  );
};

export default Contacts;
