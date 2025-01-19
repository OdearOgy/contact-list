import { FunctionComponent, PropsWithChildren } from "react";
import { Cover } from "../../components";

// TODO (hom): Add header
const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <Cover>{children}</Cover>;
};

export default Layout;
