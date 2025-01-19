import { useQuery } from "@tanstack/react-query";
import { FetchContacts } from "./_queries";

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
    <div>
      Contacts page
      <br />
      {JSON.stringify(data, null, 4)}
    </div>
  );
};

export default Contacts;
