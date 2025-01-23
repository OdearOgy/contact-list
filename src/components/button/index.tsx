import { Button as HeadlessButton } from "@headlessui/react";
import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import Cluster from "../cluster";
import styles from "./index.module.css";

export type Variant = "primary" | "danger" | "neutral";

const Button: FunctionComponent<
  PropsWithChildren<{
    prefixIcon?: ReactNode;
    variant?: Variant;
    className?: string;
    onClick?: () => void;
  }>
> = ({ onClick, prefixIcon, children, variant = "neutral", className }) => {
  const btnCls = `${styles.btn} ${styles[variant]} ${className}`;

  return (
    <HeadlessButton onClick={onClick} type='button' className={btnCls}>
      <Cluster className={styles.body}>
        <span className={styles.prefix}>{prefixIcon}</span>
        {children}
      </Cluster>
    </HeadlessButton>
  );
};

export default Button;
