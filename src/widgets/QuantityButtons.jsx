import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { IconButton, Typography } from "@material-tailwind/react";
import React from "react";

export const QuantityButtons = ({ quantity, setQuantity }) => {
  // const [quantity, setQuantity] = useState(1);
  
  const handleDecrement = () => {
    if (quantity - 1 > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="flex items-center border rounded-lg w-min p-1 gap-2">
      <IconButton
        className="rounded w-min h-min p-4"
        variant="text"
        onClick={handleDecrement}
      >
        <MinusIcon className="h-4 w-4" />
      </IconButton>
      <Typography>{quantity}</Typography>
      <IconButton
        className="rounded w-min h-min p-4"
        variant="text"
        onClick={handleIncrement}
      >
        <PlusIcon className="h-4 w-4" />
      </IconButton>
    </div>
  );
};
