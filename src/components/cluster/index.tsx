import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./index.module.css";

const Cluster: FunctionComponent<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className }) => {
  return <div className={`${styles.cluster} ${className}`}>{children}</div>;
};

export default Cluster;
