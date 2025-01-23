import { FunctionComponent } from "react";
import styles from "./index.module.css";

const Avatar: FunctionComponent<{
  initials: string;
  name: string;
  className?: string;
  size?: "large" | "small";
}> = ({ initials, name, className, size }) => {
  const avatarCls = `${styles.avatar} ${className ?? ""}`;

  return (
    <div className={avatarCls} title={name} data-size={size ?? "small"}>
      <span>{initials}</span>
    </div>
  );
};

export default Avatar;
