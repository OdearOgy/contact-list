import { Input as HeadlessInput } from "@headlessui/react";
import { FieldApi } from "@tanstack/react-form";
import { FunctionComponent } from "react";
import Stack from "../stack";
import styles from "./index.module.css";

const Input: FunctionComponent<{
  field: FieldApi<unknown, string>;
  placeholder?: string;
}> = ({ field, placeholder }) => {
  return (
    <Stack className={styles.field}>
      <HeadlessInput
        name={field.name}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={() => field.form.handleSubmit()}
        className={styles.input}
        value={field.state.value?.toString()}
        placeholder={placeholder}
      />
      {field.state.meta.errors ? (
        <span className={styles.helpText}>
          {field.state.meta.errors.join(", ")}
        </span>
      ) : null}
    </Stack>
  );
};

export default Input;
