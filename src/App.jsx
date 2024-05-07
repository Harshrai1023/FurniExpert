import { Route, Routes } from "react-router-dom";
import CustomFooter from "./components/CustomFooter";
import MobileNav from "./components/MobileNav";
import { CartPage } from "./pages/CartPage";
import { ErrorPage404 } from "./pages/ErrorPages";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { RegisterPage } from "./pages/RegisterPage";
import { SingleProductPage } from "./pages/SingleProductPage";
import { SuccessPage } from "./pages/SuccessPage";
import { WishlistPage } from "./pages/WishlistPage";
export default function App() {
  const pathList = [
    "/",
    "/login",
    "/register",
    "/cart",
    "/success",
    "/profile",
    "/wishlist",
    "/products",
    "/product/:id",
    "/products/:category",
  ];
  return (
    <>
      <MobileNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
      <CustomFooter />
    </>
  );
}
