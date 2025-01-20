import { useForm } from "@tanstack/react-form";
import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useCallback,
} from "react";
import { z } from "zod";
import { Stack } from "../../../components";
import styles from "./index.module.css";

const searchSchema = z.object({
  search: z.string().min(2, "2 or more characters are needed"),
});

const Search: FunctionComponent<{
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}> = ({ search, setSearch }) => {
  const Form = useForm({
    defaultValues: {
      search: search ?? "",
    },
    validators: {
      onChange: searchSchema,
    },
  });

  const handleSubmit = useCallback(() => {
    setSearch(Form.state.values.search);
    Form.handleSubmit();
  }, [Form, setSearch]);

  const handleReset = useCallback(() => {
    setSearch("");
    Form.reset();
  }, [Form, setSearch]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit();
      }}
      onReset={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleReset();
      }}
    >
      <Form.Field
        name='search'
        children={(field) => {
          return (
            <Stack className={styles.field}>
              <input
                name={field.name}
                value={field.state.value?.toString()}
                className={styles.input}
                placeholder='Search'
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={() => field.form.handleSubmit()}
              />

              {field.state.meta.errors ? (
                <span className={styles.helpText}>
                  {field.state.meta.errors.join(", ")}
                </span>
              ) : null}
            </Stack>
          );
        }}
      />
    </form>
  );
};

export default Search;
