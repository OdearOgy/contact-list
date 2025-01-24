import { Button as HeadlessButton } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import Cluster from "../cluster";
import styles from "./index.module.css";

export type Variant = "primary" | "danger" | "neutral";
export type Size = "large" | "medium" | "small";

const Button: FunctionComponent<
  PropsWithChildren<{
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    prefixIcon?: ReactNode;
    size?: Size;
    variant?: Variant;
  }>
> = ({
  children,
  className,
  disabled,
  loading,
  onClick,
  prefixIcon,
  size = "medium",
  variant = "neutral",
}) => {
  const btnCls = `${styles.btn} ${styles[variant]} ${className}`;

  return (
    <HeadlessButton
      onClick={onClick}
      type='button'
      className={btnCls}
      disabled={disabled}
      data-size={size}
      data-loading={loading}
    >
      <Cluster className={`${styles.body} ${loading ? styles.loading : ""}`}>
        {loading ? (
          <ArrowPathIcon className='animate-spin' />
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
