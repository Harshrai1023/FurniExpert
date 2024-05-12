import { Navigate, Route, Routes } from "react-router-dom";
import { user } from "./Data";
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

      <Routes>
        <Route path="/" element={<><MobileNav /><HomePage /><CustomFooter /></>} />
        <Route path="/cart" element={<><MobileNav /><CartPage /><CustomFooter /></>} />
        <Route path="/products" element={<><MobileNav /><ProductsPage /><CustomFooter /></>} />
        <Route path="/product/:id" element={<><MobileNav /><SingleProductPage /><CustomFooter /></>} />

        <Route path="/login" element={user ? <Navigate to="/" replace /> : <LoginPage />} />
        <Route path="/register" element={user ? <Navigate to="/" replace /> :<RegisterPage />} />

        <Route path="/success" element={<><MobileNav /><SuccessPage /><CustomFooter /></>} />
        <Route path="/profile" element={<><MobileNav /><ProfilePage /><CustomFooter /></>} />
        <Route path="/wishlist" element={<><MobileNav /><WishlistPage /><CustomFooter /></>} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>

  );
}
