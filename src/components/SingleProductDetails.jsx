import {
  CurrencyRupeeIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Button, Chip, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { QuantityButtons } from "../widgets/QuantityButtons";
export const SingleProductDetails = () => {
  const [quantity,setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-4 p-5">
      <Chip className="w-min" value="New" />
      {/* <Typography>IN STOCK</Typography> */}
      <Typography>Foundations Matte Flip Flop</Typography>
      <Typography>(9.12k reviews)</Typography>
      <Typography>₹97.14</Typography>
      <Typography>
        Featuring the original ripple design inspired by Japanese bullet trains,
        the Nike Air Max 97 lets you push your style full-speed ahead.
      </Typography>
      <div className="h-full" />
      <div className="flex justify-between">
        <Typography>Quantity</Typography>
        <QuantityButtons quantity={quantity} setQuantity={setQuantity}/>
      </div>
      <div className="border-t-2" />
      <div className="flex gap-2">
        <Button fullWidth className="flex items-center justify-center gap-2">
          <ShoppingCartIcon className="h-5 w-5" /> Add to Cart
        </Button>
        <Button fullWidth className="flex items-center justify-center gap-2">
          <CurrencyRupeeIcon className="h-5 w-5" /> Buy Now
        </Button>
      </div>
      <div className="flex justify-center">
        <Button
          variant="text"
          className="w-min flex items-center gap-2 px-6 py-3"
        >
          <HeartIcon className="h-5 w-5" />
          Favorite
        </Button>
      </div>
    </div>
  );
};
