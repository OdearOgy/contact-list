import { useForm } from "@tanstack/react-form";
import { FunctionComponent, RefObject, useCallback } from "react";
import { z } from "zod";
import { Input, Stack } from "../../../../components";
import { Contact } from "../../_queries/models";
import styles from "./index.module.css";

const detailsFormSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  phone: z.number(),
});

const EMPTY: Contact = {
  id: 0,
  name: "",
  phone: 0,
};

const DetailsForm: FunctionComponent<{
  data?: Contact;
  onSubmit?: (formData: Contact) => void;
  formRef: RefObject<HTMLFormElement>;
}> = ({ data, onSubmit, formRef }) => {
  const Form = useForm({
    defaultValues: data ?? EMPTY,
    validators: {
      onChange: detailsFormSchema,
    },
  });

  const handleSubmit = useCallback(() => {
    onSubmit?.(Form.state.values as Contact);
    Form.handleSubmit();
  }, [Form, onSubmit]);

  const handleReset = useCallback(() => {
    Form.reset();
  }, [Form]);

  return (
    <form
      ref={formRef}
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
      <Stack className={styles.form}>
        <Form.Field
          name='id'
          children={(field) => {
            return (
              <Input
                hidden
                placeholder='id'
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={field.handleChange}
                errors={field.state.meta.errors}
              />
            );
          }}
        />

        <Form.Field
          name='name'
          children={(field) => {
            return (
              <Input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={field.handleChange}
                errors={field.state.meta.errors}
                placeholder='Contact Name'
              />
            );
          }}
        />

        <Form.Field
          name='phone'
          children={(field) => {
            return (
              <Input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={field.handleChange}
                errors={field.state.meta.errors}
                placeholder='Phone number'
              />
            );
          }}
        />
      </Stack>
    </form>
  );
};

export default DetailsForm;
