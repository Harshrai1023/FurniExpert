import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [
      // {
      //   id: 1,
      //   img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
      //   name: "Spotify",
      //   price: 100,
      //   quantity: 1,
      // },
      // {
      //   id: 2,
      //   img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
      //   name: "Amazon",
      //   price: 200,
      //   quantity: 1,
      // },
      // {
      //   id: 3,
      //   img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
      //   name: "Pinterest",
      //   price: 300,
      //   quantity: 1,
      // },
      // {
      //   id: 4,
      //   img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
      //   name: "Google",
      //   price: 50,
      //   quantity: 1,
      // },
      // {
      //   id: 5,
      //   img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
      //   name: "Netflix",
      //   price: 10,
      //   quantity: 1,
      // },
    ],
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },

    removeProduct: (state, action) => {
      const removedProduct = state.products.find(
        (product) => product._id === action.payload
      );

      if (removedProduct) {
        state.products = state.products.filter(
          (product) => product._id !== action.payload
        );
        state.total -= removedProduct.price * removedProduct.quantity;
      }
    },

    handleQuantityChange: (state, action) => {
      // Find the index of the item with the given _id in the products array
      const itemIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        // If the operation is "increment", increase the quantity of the item
        if (action.payload.op === "increment") {
          state.products[itemIndex].quantity += 1;
        }
        // If the operation is "decrement", decrease the quantity of the item
        else if (action.payload.op === "decrement") {
          if (state.products[itemIndex].quantity > 1) {
            state.products[itemIndex].quantity -= 1;
          }
        }
      }

      // Calculate the total price of all products in the cart
      state.total = state.products.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    },
  },
});

export const { addProduct, removeProduct, handleQuantityChange } =
  cartSlice.actions;
export default cartSlice.reducer;
