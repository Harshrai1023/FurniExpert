import {
  CurrencyRupeeIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Button, Chip, IconButton, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import Rating from "react-rating";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";

export const SingleProductDetails = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const product = {
    id: Date.now(),
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Foundations Matte Flip Flop",
    desc: "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.",
    price: 99,
    rating: 3.5,
    quantity: quantity,
  };
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () =>
    setQuantity(quantity - 1 > 0 ? quantity - 1 : 1);

  return (
    <div className="flex flex-col gap-4 p-5">
      <Chip className="w-min" value="New" />

      {/* <Typography>IN STOCK</Typography> */}
      <Typography>{product.name}</Typography>

      <div className="flex gap-2">
        <Rating
          initialRating={product.rating}
          readonly
          emptySymbol={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          }
          fullSymbol={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-orange-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          }
        />
        <Typography>(9.12k reviews)</Typography>
      </div>

      <div className=" flex gap-2">
        <Typography>₹{product.price}</Typography>
        <Typography className="line-through text-gray-500">
          ₹{product.price}
        </Typography>
      </div>
      <Typography>{product.desc}</Typography>
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
        <Button
          fullWidth
          className="flex items-center justify-center gap-2"
          onClick={() => dispatch(addProduct(product))}
        >
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
