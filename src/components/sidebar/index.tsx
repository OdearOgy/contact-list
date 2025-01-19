import { FunctionComponent } from "react";

const Sidebar: FunctionComponent<{
  data: Record<string, unknown>;
}> = ({ data }) => {
  return (
    <h1>
      hello,
      {JSON.stringify(data, null, 4)}
    </h1>
  );
};

export default Sidebar;
