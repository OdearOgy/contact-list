import { createRootRoute } from "@tanstack/react-router";
import Layout from "./_layout";

function RootComponent() {
  return <Layout />;
}

export const Route = createRootRoute({
  component: RootComponent,
});
