import { Button, Input, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { CartDetails } from "../components/CartDetails";
export function CartPage() {
  const cart = useSelector((state) => state.cart)
  return (
    <div className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-9">
      <CartDetails />
      
      {/* Order Summary */}
      <div className="col-span-3">
        <div className="flex flex-col gap-5 p-5">
          <div className="flex flex-col gap-3 border shadow-lg bg-white p-5 rounded-xl">
            <Typography>Order Summary</Typography>
            <div className="flex justify-between mt-2">
              <Typography>Sub Total</Typography>
              <Typography>₹{cart.total}</Typography>
            </div>
            <div className="flex justify-between">
              <Typography>Discount</Typography>
              <Typography>-</Typography>
            </div>
            <div className="flex justify-between">
              <Typography>Shipping</Typography>
              <Typography>Free</Typography>
            </div>
            <div className="border-t" />
            <div className="flex justify-between">
              <Typography>Total</Typography>
              <div className="text-right">
                <Typography>₹{cart.total}</Typography>
                <Typography>(VAT included if applicable)</Typography>
              </div>
            </div>

            <Input label="Coupon" size="lg" />
          </div>
          <Button>Check Out</Button>
        </div>
      </div>
    </div>
  );
}
