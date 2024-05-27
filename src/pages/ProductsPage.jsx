import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";

export const ProductsPage = () => {
  const tempProducts = [
    {
      _id: 1,
      title: "Spotify",
      desc: "Hello World!",
      img: ["assets/webp/IKEA-Alex_drawer_white-3D.webp"],
      price: 100,
      quantity: 1,
    },
    {
      _id: 2,
      title: "Amazon",
      desc: "Lorem",
      img: ["assets/webp/IKEA-Allak_Swivel_Chair-3D.webp"],
      price: 200,
      quantity: 1,
    },
    {
      _id: 3,
      title: "Pinterest",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      img: ["assets/webp/IKEA-Anes_Double__Bed-3D.webp"],
      price: 300,
      quantity: 1,
    },
    {
      _id: 4,
      title: "Google",
      desc: "Lorem ipsum dolor sit amet consectetur ",
      img: [
        "assets/webp/IKEA-Antnas_Table_And_4_Chairs-3D.webp",
        "assets/webp/IKEA-Antnas_Table_And_4_Chairs-BACK.webp",
        "assets/webp/IKEA-Antnas_Table_And_4_Chairs-FRONT.webp",
        "assets/webp/IKEA-Antnas_Table_And_4_Chairs-LEFT.webp",
        "assets/webp/IKEA-Antnas_Table_And_4_Chairs-RIGHT.webp",
        "assets/webp/IKEA-Antnas_Table_And_4_Chairs-TOP.webp",
      ],
      price: 50,
      quantity: 1,
    },
  ];
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);

  // https://data2.polantis.com/image1000/data/2/2/715/formats/4/18/IKEA-Alex_drawer_white-3D.png
  // https://data2.polantis.com/image1000/data/2/2/878/formats/4/18/IKEA-Tylosand_Corner_Sofa-3D.png
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="bg-red-100 flex-1">Filters Placeholder</div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-blue-100 flex-[3]">
          {tempProducts.map((product) => (
            <div
              key={product._id}
              className="col-span-1 flex flex-col bg-white border-2 p-4 rounded-lg shadow-md"
            >
              <NavLink to={`/product/${product._id}`}>
                <img
                  className="p-2 mb-2 max-h-56 self-center"
                  src={product.img[0]}
                />
                <Typography className="text-md text-justify ">
                  {product.title}
                </Typography>
              </NavLink>
              <div className="flex flex-wrap gap-4 items-center mt-auto pt-3 text-xs">
                <div className="flex gap-2">
                  <Typography>₹{product.price}</Typography>
                  <Typography className="line-through">
                    ₹{product.price}
                  </Typography>
                </div>
                <Button
                  fullWidth
                  className="flex items-center justify-center gap-2"
                  onClick={() => dispatch(addProduct(product))}
                >
                  <ShoppingCartIcon className="h-5 w-5" /> Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
