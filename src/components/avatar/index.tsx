import { FunctionComponent } from "react";
import styles from "./index.module.css";

const Avatar: FunctionComponent<{
  initials: string;
  name: string;
  className?: string;
  size?: "large" | "small";
  loading?: boolean;
}> = ({ initials, name, className, size, loading }) => {
  const avatarCls = `${styles.avatar} ${loading ? `${styles.loading} animate-pulse` : ""} ${className ?? ""}`;

  return (
    <div className={avatarCls} title={name} data-size={size ?? "small"}>
      <span>{initials}</span>
    </div>
  );
};

export default Avatar;
