import { Button as HeadlessButton } from "@headlessui/react";
import { CircleStackIcon } from "@heroicons/react/24/solid";
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
    disabled?: boolean;
    loading?: boolean;
  }>
> = ({
  onClick,
  prefixIcon,
  children,
  variant = "neutral",
  className,
  disabled,
  loading,
}) => {
  const btnCls = `${styles.btn} ${styles[variant]} ${className}`;

  return (
    <HeadlessButton
      onClick={onClick}
      type='button'
      className={btnCls}
      disabled={disabled}
    >
      <Cluster className={styles.body}>
        {loading ? (
          <span className={styles.prefix}>
            <CircleStackIcon />
            hello
          </span>
        ) : (
          <>
            <span className={styles.prefix}>{prefixIcon}</span>
            {children}
          </>
        )}
      </Cluster>
    </HeadlessButton>
  );
};

export default Button;
