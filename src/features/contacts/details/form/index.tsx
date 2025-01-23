import { useForm } from "@tanstack/react-form";
import { FunctionComponent, RefObject, useCallback, useState } from "react";
import { z } from "zod";
import { Input, Stack } from "../../../../components";
import { Contact } from "../../_queries/models";

const detailsFormSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  phone: z.string(),
});

const EMPTY: Contact = {
  id: null,
  name: "",
  phone: "",
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
      <Stack>
        <Form.Field
          name='name'
          children={(field) => {
            return <Input field={field} placeholder='Contact Name' />;
          }}
        />

        <Form.Field
          name='phone'
          children={(field) => {
            return <Input field={field} placeholder='Phone number' />;
          }}
        />
      </Stack>
    </form>
  );
};

export default DetailsForm;
