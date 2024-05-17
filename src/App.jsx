import { Button } from "@material-tailwind/react";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { isAdmin, user } from "./Data";
import CustomFooter from "./components/CustomFooter";
import MobileNav from "./components/MobileNav";
import { AddProductPage } from "./pages/AddProductPage";
import { CartPage } from "./pages/CartPage";
import { EditProductPage } from "./pages/EditProductPage";
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
  
  return (<>
      <div>
        <NavLink to="/"><Button>Home Page</Button></NavLink>
        <NavLink to="/cart"><Button>Cart Page</Button></NavLink>
        <NavLink to="/products"><Button>Products Page</Button></NavLink>
        <NavLink to="/product/:id"><Button>SingleProduct Page</Button></NavLink>
        <NavLink to="/login"><Button>Login Page</Button></NavLink>
        <NavLink to="/register"><Button>Register Page</Button></NavLink>
        <NavLink to="/addproduct"><Button>Add Product Page</Button></NavLink>
        <NavLink to="/editproduct/:id"><Button>Edit Product Page</Button></NavLink>
        <NavLink to="/success"><Button>Success Page</Button></NavLink>
        <NavLink to="/profile"><Button>Profile Page</Button></NavLink>
        <NavLink to="/wishlist"><Button>Wishlist Page</Button></NavLink>
        <NavLink to="*"><Button>Error Page 404</Button></NavLink>
      </div>
      <Routes>
        <Route path="/" element={<><MobileNav /><HomePage /><CustomFooter /></>} />
        <Route path="/cart" element={<><MobileNav /><CartPage /><CustomFooter /></>} />
        <Route path="/products" element={<><MobileNav /><ProductsPage /><CustomFooter /></>} />
        <Route path="/product/:id" element={<><MobileNav /><SingleProductPage /><CustomFooter /></>} />

        <Route path="/login" element={user ? <Navigate to="/" replace /> : <LoginPage />} />
        <Route path="/register" element={user ? <Navigate to="/" replace /> :<RegisterPage />} />
        <Route path="/addproduct" element={isAdmin ? <AddProductPage /> : <Navigate to="/" replace />} />
        <Route path="/editproduct/:id" element={isAdmin ? <EditProductPage /> : <Navigate to="/" replace />} />

        <Route path="/success" element={<><MobileNav /><SuccessPage /><CustomFooter /></>} />
        <Route path="/profile" element={<><MobileNav /><ProfilePage /><CustomFooter /></>} />
        <Route path="/wishlist" element={<><MobileNav /><WishlistPage /><CustomFooter /></>} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>

  </>
  );
}
