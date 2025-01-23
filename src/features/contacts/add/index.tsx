import { PlusIcon } from "@heroicons/react/24/solid";
import { Button } from "../../../components";

const Add = () => {
  return (
    <Button variant='neutral' prefixIcon={<PlusIcon />}>
      Add
    </Button>
  );
};

export default Add;
