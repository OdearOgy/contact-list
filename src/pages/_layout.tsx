import { createFileRoute, Outlet } from "@tanstack/react-router";
import { FunctionComponent } from "react";

// TODO (hom): Add header
const Layout: FunctionComponent = () => {
  return <Outlet />;
};

export const Route = createFileRoute("/_layout")({
  component: Layout,
});

export default Layout;
