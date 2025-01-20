import { createFileRoute, Outlet } from "@tanstack/react-router";
import { FunctionComponent } from "react";
import { Cover } from "../components";

// TODO (hom): Add header
const Layout: FunctionComponent = () => {
  return (
    <Cover className='p-0'>
      <Outlet />
    </Cover>
  );
};

export const Route = createFileRoute("/_layout")({
  component: Layout,
});

export default Layout;
