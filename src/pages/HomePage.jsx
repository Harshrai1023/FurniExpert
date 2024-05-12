import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import React from "react";

import { topProducts } from "../Data";

export const HomePage = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-8">
      {/* Hero Section */}
      <section className="flex h-screen">
        <div>
          <Typography>Discover the Latest Furniture Trends</Typography>
          <Typography>
            Shop the Latest Fashion Items and Stay ahead of the style game
          </Typography>
          <Button>Shop Now</Button>
          <Button>Explore</Button>
        </div>
        <div>
          <img src="/assets/images/couch.png" alt="" />
        </div>
      </section>

      {/* Top Products */}
      <section className="py-16">
        <div className="grid grid-row-1 grid-cols-2 md:grid-cols-4 items-center justify-center">
          <div className="">
            <Typography>Crafted with excellent material.</Typography>
            <Typography>
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done.
            </Typography>
            <Button>Explore</Button>
          </div>
          {topProducts.map((product, index) => (
            <div
              key={index}
              className="flex  flex-col items-center justify-end h-full rounded-2xl group relative"
            >
              <img
                className="scale-75 duration-300 group-hover:-translate-y-5"
                src={product.img}
                alt={product.name}
              />
              <Typography>{product.name}</Typography>
              <Typography>${product.price}</Typography>
              <IconButton
                className="rounded-full translate-y-3 invisible group-hover:visible"
                variant="text"
                size="sm"
              >
                <PlusCircleIcon className="h-8 w-8 stroke-2" />
              </IconButton>

              <div className="h-3/4 w-4/5 absolute rounded-2xl -z-10 group-hover:bg-card-1"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
