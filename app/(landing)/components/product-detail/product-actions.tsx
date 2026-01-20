"use client";
import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";

const ProductActions = () => {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex gap-5">
      <div className="border border-gray-500 inline-flex w-fit min-w-20.5">
        <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col">
          <button
            className=" border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={() => setQty(qty + 1)}
          >
            <FiChevronUp />
          </button>
          <button
            className=" cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>

      <Button className="px-20 w-full ">
        <FiShoppingBag size={24} />
        Add to Cart
      </Button>
      <Button className="px-20 w-full " variant="dark">
        <FiArrowRight size={24} />
        Checkout Now
      </Button>
    </div>
  );
};

export default ProductActions;
