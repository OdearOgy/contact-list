import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./index.module.css";

const Cover: FunctionComponent<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className }) => {
  return <div className={`${styles.cover} ${className}`}>{children}</div>;
};

export default Cover;
