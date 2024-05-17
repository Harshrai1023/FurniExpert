import React from "react";
import { SingleProductDetails } from "../components/SingleProductDetails";
import { SingleProductImageGallery } from "../components/SingleProductImageGallery";
export const SingleProductPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 max-w-7xl mx-auto p-5 ">
      {/* Product Image Gallery */}
      <SingleProductImageGallery />
      
      {/* Product Details */}
      <SingleProductDetails />

      {/* Product guarantees */}
      <div></div>
      {/* Product Specifications & Reviews */}
      <div></div>
    </div>
  );
};
