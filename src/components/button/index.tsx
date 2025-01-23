import { Button as HeadlessButton } from "@headlessui/react";
import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./index.module.css";

export type Variant = "primary" | "danger" | "neutral";

const Button: FunctionComponent<
  PropsWithChildren<{
    variant?: Variant;
    className?: string;
    onClick?: () => void;
  }>
> = ({ onClick, children, variant = "neutral", className }) => {
  const btnCls = `${styles.btn} ${styles[variant]} ${className}`;

  return (
    <HeadlessButton onClick={onClick} type='button' className={btnCls}>
      {children}
    </HeadlessButton>
  );
};

export default Button;
