import {
  CheckBadgeIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import React from "react";
import ProductCarousel from "../components/ProductCarousel";
import { SingleProductDetails } from "../components/SingleProductDetails";
import { SingleProductImageGallery } from "../components/SingleProductImageGallery";
export const SingleProductPage = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto gap-5">
      {/* Product Image Gallery */}
      <div className="flex flex-col lg:flex-row gap-5 p-5">
        {/* <SingleProductImageGallery /> */}
        <ProductCarousel images={[
        "/assets/webp/IKEA-Antnas_Table_And_4_Chairs-3D.webp",
        "/assets/webp/IKEA-Antnas_Table_And_4_Chairs-BACK.webp",
        "/assets/webp/IKEA-Antnas_Table_And_4_Chairs-FRONT.webp",
        "/assets/webp/IKEA-Antnas_Table_And_4_Chairs-LEFT.webp",
        "/assets/webp/IKEA-Antnas_Table_And_4_Chairs-RIGHT.webp",
        "/assets/webp/IKEA-Antnas_Table_And_4_Chairs-TOP.webp",
      ]} />
        {/* Product Details */}
        <SingleProductDetails />
      </div>

      {/* Product guarantees */}
      <div className="grid grid-cols-3 self-center gap-5 p-2 my-5">
        <div className="flex flex-col justify-center items-center text-center gap-2 max-w-xs">
          <CheckBadgeIcon className="h-8 w-8 fill-secondary" />
          <Typography>100% Original</Typography>
          <Typography>
            Crafted from the finest materials for authentic and elegant pieces.
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-2 max-w-xs">
          <ClockIcon className="h-8 w-8 fill-secondary" />
          <Typography>10 Day Replacement</Typography>
          <Typography>
            Easily replace any product within 10 days of purchase.
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-2 max-w-xs">
          <ShieldCheckIcon className="h-8 w-8 fill-secondary" />
          <Typography>1 Year Warranty</Typography>
          <Typography>
            Enjoy a 1-year warranty on all our furniture products.
          </Typography>
        </div>
      </div>
      
      {/* Product Specifications & Reviews */}
      <ProductCarousel />
      {/* <div>Product Specifications & Reviews</div> */}
    </div>
  );
};
