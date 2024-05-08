import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Button, Input, Typography } from "@material-tailwind/react";
import React from "react";
import { topProducts } from "../Data";
export const CartPage = () => {
  const [coupon, setCoupon] = React.useState("");
  const onChange = ({ target }) => setCoupon(target.value);
  return (
    <div className="max-w-7xl md:mx-auto grid grid-cols-1 md:grid-cols-4 m-5 md:gap-5">
      {/* Product Info */}
      <div className="bg-red-100 col-span-3">
        <div className="bg-blue-100 rounded-2xl">
          <div className="grid grid-cols-5 items-center p-5">
            <Typography className="col-span-5">
              Cart ({topProducts.length} items)
            </Typography>
            <Typography className="col-span-2 bg-gray-200">Product</Typography>
            <Typography className="bg-gray-200">Price</Typography>
            <Typography className="bg-gray-200">Quantity</Typography>
            <Typography className="bg-gray-200">Total Price</Typography>

            {topProducts.map((product, index) => (
              <>
                <div className="col-span-2 flex items-center gap-3">
                  <img className="h-24" src={product.img} alt="" />
                  <div>
                    <Typography>{product.name}</Typography>
                    <Typography>{product.description}</Typography>
                  </div>
                </div>
                <Typography>${product.price}</Typography>
                <Typography>Count</Typography>
                <div className="flex gap-2">
                  <Typography>${product.price}</Typography>
                  <Typography>Delete</Typography>
                </div>
              </>
            ))}
          </div>
        </div>
        <Button variant="text" className="flex items-center gap-2 mt-5">
          <ChevronLeftIcon className="h-4 w-4 stroke-2" /> Continue Shopping
        </Button>
      </div>

      {/* Checkout Card */}
      <div className=" flex flex-col gap-5 mt-5 md:mt-0">
        <div className="flex flex-col rounded-2xl p-5 gap-3 border shadow">
          <Typography>Order Summary</Typography>
          <div className="flex justify-between">
            <Typography>Subtotal</Typography>
            <Typography>$316.6</Typography>
          </div>
          <div className="flex justify-between">
            <Typography>Discount</Typography>
            <Typography>-</Typography>
          </div>
          <div className="flex justify-between">
            <Typography>Shipping</Typography>
            <Typography>Free</Typography>
          </div>
          <div className="border-t border-blue-gray-50">
            <div className="flex justify-between pt-3">
              <Typography>Total</Typography>
              <Typography>$316.6</Typography>
            </div>
            <Typography className="text-right">(GST included)</Typography>
          </div>
          <div className="relative flex w-full max-w-[24rem]">
            <Input
              type="coupon"
              label="Coupon Address"
              value={coupon}
              onChange={onChange}
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              color={coupon ? "gray" : "blue-gray"}
              disabled={!coupon}
              className="!absolute right-1 top-1 rounded"
            >
              Apply
            </Button>
          </div>
        </div>
        <Button fullWidth>Check Out</Button>
      </div>
    </div>
  );
};
