import { ChevronLeftIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { QuantityButtons } from "../widgets/QuantityButtons";

const TABLE_HEAD = ["Product", "Price", "Quantity", "Total Price", ""];

const initialCartItems = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: 100,
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: 200,
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: 300,
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "Google",
    amount: 50,
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "Netflix",
    amount: 10,
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

export function CartDetails() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [quantities, setQuantities] = useState(
    Array(initialCartItems.length).fill(1)
  );

  const handleQuantityChange = (index, newQuantity) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantity;
    setQuantities(newQuantities);
  };

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    const newQuantities = quantities.filter((_, i) => i !== index);
    setCartItems(newCartItems);
    setQuantities(newQuantities);
  };

  return (
    <div className="mx-5 my-0 lg:mx-0 lg:my-5 col-span-6">
      <Card className="">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex gap-2">
            <Typography>Cart</Typography>
            <Typography>({cartItems.length} items)</Typography>
          </div>
        </CardHeader>
        <CardBody className="overflow-auto px-0">
          {cartItems.length > 0 ? (
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cartItems.map(
                  (
                    {
                      img,
                      name,
                      amount,
                      date,
                      status,
                      account,
                      accountNumber,
                      expiry,
                    },
                    index
                  ) => {
                    const isLast = index === cartItems.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
                    const quantity = quantities[index];
                    const totalPrice = amount * quantity;

                    return (
                      <tr key={name}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <img
                              src={img}
                              alt={name}
                              size="md"
                              className="border w-12 h-12 rounded-lg  border-blue-gray-50 bg-blue-gray-50/50 object-contain "
                            />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            ₹{amount}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <QuantityButtons
                            quantity={quantity}
                            setQuantity={(newQuantity) =>
                              handleQuantityChange(index, newQuantity)
                            }
                          />
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            ₹{totalPrice}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Remove Product">
                            <IconButton
                              className="rounded-full"
                              variant="text"
                              onClick={() => handleRemoveItem(index)}
                            >
                              <TrashIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          ) : (
            <div className="flex flex-col text-center gap-2 py-8 px-2">
              <img className="h-40" src="ic_cart.svg" alt="" />
              <Typography>Cart is Empty!</Typography>
              <Typography>
                Look like you have no items in your shopping cart.
              </Typography>
            </div>
          )}
        </CardBody>
      </Card>
      <div className="pt-3">
        <Button variant="text" className="flex items-center gap-2">
          <ChevronLeftIcon className="h-4 w-4" /> Continue Shopping
        </Button>
      </div>
    </div>
  );
}
