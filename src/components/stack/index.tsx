import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./index.module.css";

const Stack: FunctionComponent<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className }) => {
  return <div className={`${styles.stack} ${className}`}>{children}</div>;
};

export default Stack;
