import {
  ChevronLeftIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleQuantityChange, removeProduct } from "../redux/cartRedux";

const TABLE_HEAD = ["Product", "Price", "Quantity", "Total Price", ""];

export function CartDetails() {
  const cartItems = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

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
                {cartItems.map((cartItem, index) => {
                  const isLast = index === cartItems.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  const quantity = cartItem.quantity;
                  const totalPrice = cartItem.price * quantity;

                  return (
                    <tr key={cartItem.id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <img
                            src={cartItem.img}
                            alt={cartItem.name}
                            size="md"
                            className="border w-12 h-12 rounded-lg  border-blue-gray-50 bg-blue-gray-50/50 object-contain "
                          />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {cartItem.name}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          ₹{cartItem.price}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center border rounded-lg w-min p-1 gap-2">
                          <IconButton
                            className="rounded w-min h-min p-4"
                            variant="text"
                            onClick={() =>
                              dispatch(
                                handleQuantityChange({
                                  id: cartItem.id,
                                  op: "decrement",
                                })
                              )
                            }
                          >
                            <MinusIcon className="h-4 w-4" />
                          </IconButton>
                          <Typography>{quantity}</Typography>
                          <IconButton
                            className="rounded w-min h-min p-4"
                            variant="text"
                            onClick={() =>
                              dispatch(
                                handleQuantityChange({
                                  id: cartItem.id,
                                  op: "increment",
                                })
                              )
                            }
                          >
                            <PlusIcon className="h-4 w-4" />
                          </IconButton>
                        </div>
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
                            onClick={() => dispatch(removeProduct(cartItem.id))}
                          >
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
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
        <NavLink to="/products">
          <Button variant="text" className="flex items-center gap-2">
            <ChevronLeftIcon className="h-4 w-4" /> Continue Shopping
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
