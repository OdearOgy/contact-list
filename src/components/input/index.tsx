import { Input as HeadlessInput } from "@headlessui/react";
import { Updater, ValidationError } from "@tanstack/react-form";
import { FunctionComponent } from "react";
import Stack from "../stack";
import styles from "./index.module.css";

const Input: FunctionComponent<{
  errors?: ValidationError[];
  hidden?: boolean;
  name: string;
  onBlur: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (update: Updater<any>) => void;
  placeholder?: string;
  value: unknown;
}> = ({ name, value, onBlur, onChange, errors, placeholder, hidden }) => {
  return (
    <Stack className={styles.field}>
      <HeadlessInput
        name={name}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => onBlur()}
        className={styles.input}
        value={value?.toString()}
        placeholder={placeholder}
        hidden={hidden}
      />
      {errors ? (
        <span className={styles.helpText}>{errors.join(", ")}</span>
      ) : null}
    </Stack>
  );
};

export default Input;
