import { PlusIcon } from "@heroicons/react/24/solid";
import { Button, Cluster, Popup } from "../../../components";

const Add = () => {
  return (
    <>
      <Popup />
      <Button variant='neutral'>
        <Cluster className='items-center justify-center gap-1'>
          <PlusIcon className='size-5' />
          Add
        </Cluster>
      </Button>
    </>
  );
};

export default Add;
