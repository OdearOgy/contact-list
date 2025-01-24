import { createFileRoute } from "@tanstack/react-router";
import ContactDetails from "../features/contacts/details";

export const Route = createFileRoute("/contacts/$contactId")({
  component: () => <ContactDetails />,
});
