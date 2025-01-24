import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";
import { Button, Stack } from "../components";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate({ from: "/" });

  const handleNavigation = useCallback(() => {
    navigate({
      to: "/contacts",
    });
  }, [navigate]);

  return (
    <Stack className='items-center justify-center h-screen gap-2'>
      <h1 className='text-5xl'>Welcome!</h1>
      <Button
        variant='primary'
        onClick={handleNavigation}
        prefixIcon={<ArrowRightIcon />}
      >
        Contacts
      </Button>
    </Stack>
  );
}
