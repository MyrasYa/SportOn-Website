"use client";

import { cartList } from "../ui/cart-popup";
import Image from "next/image";
import Button from "../ui/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from "next/dist/client/components/navigation";

const CartItems = () => {

  const { push } = useRouter();
  const totalprice = cartList.reduce(
    (all, item) => all + item.price * item.qty,
    0,
  );

  const payment = () => {
    push("/payment");

  }
  return (
    <CardWithHeader title="Cart Items">
      <div className="overflow-auto max-h-75">
        {cartList.map((item, index) => (
          <div className="border-b border-gray-200 flex p-5 gap-3" key={index}>
            <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
              <Image
                src={`/images/products/${item.imgUrl}`}
                width={63}
                height={63}
                alt={item.name}
                className="aspect-square object-contain"
              />
            </div>
            <div className="self-center">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex gap-3 font-medium text-xs">
                <div>{item.qty}x</div>
                <div className=" text-primary">
                  {priceFormatter(item.price)}
                </div>
              </div>
            </div>
            <Button
              size="small"
              variant="ghost"
              className="w-7 h-7 p-0! self-center ml-auto"
            >
              <FiTrash2 />
            </Button>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-md">Total</div>
          <div className="text-primary text-sm">
            {priceFormatter(totalprice)}
          </div>
        </div>
        <Button className="w-full mt-4 px-10" variant="dark" onClick={payment}>
          <FiCreditCard size={20} />
          Proceed to Payment
        </Button>
      </div>
    </CardWithHeader>
  );
};

export default CartItems;
