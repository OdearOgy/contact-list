import { useQuery } from "@tanstack/react-query";
import { Cluster } from "../../components";
import { FetchContacts } from "./_queries";
import Sidebar from "./sidebar";

const KEY = "contacts";

const Contacts = () => {
  const { data, isError, isPending } = useQuery({
    queryKey: [KEY],
    queryFn: FetchContacts,
  });

  if (isPending) {
    return <div>loading ....</div>;
  }

  if (isError) {
    return <div>some random error</div>;
  }

  return (
    <Cluster>
      <Sidebar data={data} />
    </Cluster>
  );
};

export default Contacts;
