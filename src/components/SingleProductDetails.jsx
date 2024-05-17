import { Button, Chip, Typography } from "@material-tailwind/react";
import React from "react";
export const SingleProductDetails = () => {
  return (
    <div className="flex flex-col gap-3">
      <Chip className="w-min" value="New" />
      <Typography>IN STOCK</Typography>
      <Typography>Foundations Matte Flip Flop</Typography>
      <Typography>(9.12k reviews)</Typography>
      <Typography>$97.14</Typography>
      <Typography>
        Featuring the original ripple design inspired by Japanese bullet trains,
        the Nike Air Max 97 lets you push your style full-speed ahead.
      </Typography>
      <div className="h-full" />
      <div className="flex justify-between">
        <Typography>Quantity</Typography>
        <div>
          <div className="Add/Subtract Quantity h-5">asd</div>
          <Typography>Quantity</Typography>
        </div>
      </div>
      <div className="border-t-2" />
      <div className="flex gap-2">
        <Button fullWidth>Add to Cart</Button>
        <Button fullWidth>Buy Now</Button>
      </div>
      <div className="flex justify-center">
        <Button
          variant="text"
          className="w-min flex items-center gap-2 px-6 py-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>{" "}
          Favorite
        </Button>
      </div>
    </div>
  );
};
