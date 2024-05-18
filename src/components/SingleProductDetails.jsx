import {
  CurrencyRupeeIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Button, Chip, IconButton, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";

export const SingleProductDetails = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const item = {
    id: Date.now(),
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Foundations Matte Flip Flop",
    desc:"Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.",
    price: 100,
    quantity: quantity,
  };
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () =>
    setQuantity(quantity - 1 > 0 ? quantity - 1 : 1);

  return (
    <div className="flex flex-col gap-4 p-5">
      <Chip className="w-min" value="New" />

      {/* <Typography>IN STOCK</Typography> */}
      <Typography>{item.name}</Typography>
      <Typography>(9.12k reviews)</Typography>
      <Typography>₹{item.price}</Typography>
      <Typography>
        {item.desc}
      </Typography>
      <div className="h-full" />
      <div className="flex justify-between">
        <Typography>Quantity</Typography>
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
      </div>
      <div className="border-t-2" />
      <div className="flex gap-2">
        <Button fullWidth className="flex items-center justify-center gap-2" onClick={() => dispatch(addProduct(item))}>
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
