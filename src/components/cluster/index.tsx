import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./index.module.css";

const Cluster: FunctionComponent<
  PropsWithChildren<{
    className?: string;
    onClick?: () => void;
  }>
> = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={`${styles.cluster} ${className}`}>
      {children}
    </div>
  );
};

export default Cluster;
