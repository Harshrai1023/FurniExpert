import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";

import App from "./App";
import "./index.css";
const theme = {
  button: {
    defaultProps: {
      color: "primary",
    },
    valid: {
      colors: ["primary"],
    },
    styles: {
      variants: {
        filled: {
          primary: {
            background: "bg-primary",
            color: "text-white",
          },
        },
        outlined: {
          primary: {
            border: "border border-primary",
            color: "text-primary",
          },
        },
        gradient: {
          primary: {
            background: "bg-primary",
            color: "text-white",
          },
        },
        text: {
          primary: {
            color: "text-primary",
          },
        },
      },
    },
  },
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate> */}
        <ThemeProvider value={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
