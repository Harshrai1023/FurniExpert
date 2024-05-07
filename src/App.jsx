import { ThemeProvider } from "@material-tailwind/react";
import CustomFooter from "./components/CustomFooter";
import MobileNav from "./components/MobileNav";

export default function App() {
  const customTheme = {};
  const pathList = [
    "/",
    "/cart",
    "/success",
    "/login",
    "/register",
    "/profile",
    "/products",
    "/product/:id",
    "/products/:category",
  ];
  return (
    <ThemeProvider value={customTheme}>
      <MobileNav />

      <CustomFooter />
    </ThemeProvider>
  );
}
