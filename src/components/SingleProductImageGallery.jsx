import React from "react";
export function SingleProductImageGallery() {
  return (
    <div className="w-full">
      <div className="flex flex-col-reverse md:flex-row justify-evenly items-center gap-3">
        <div className="flex flex-row md:flex-col gap-3 justify-between">
          <img className="md:w-[115px] rounded-xl overflow-auto" src="https://placehold.co/320" alt="" />
          <img className="md:w-[115px] rounded-xl overflow-auto" src="https://placehold.co/320" alt="" />
          <img className="md:w-[115px] rounded-xl overflow-auto" src="https://placehold.co/320" alt="" />
          <img className="md:w-[115px] rounded-xl overflow-auto" src="https://placehold.co/320" alt="" />
        </div>
        <div>
          <img className="rounded-2xl" src="https://placehold.co/512" alt="" />
        </div>
      </div>
    </div>
  );
}
