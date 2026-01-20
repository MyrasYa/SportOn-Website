import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";

const cartList = [
  {
    name: "SportsOn Hyperfast Shoes",
    type: "Running",
    price: 329000,
    qty: 2,
    imgUrl: "1.svg",
  },

  {
    name: "SportsOn Rockets Tennis",
    type: "Tennis",
    price: 999000,
    qty: 3,
    imgUrl: "2.svg",
  },

  {
    name: "SportsOn Slowlivin",
    type: "Running",
    price: 199000,
    qty: 3,
    imgUrl: "3.svg",
  },
];

interface CartPopupProps extends React.HTMLAttributes<HTMLDivElement> {className?: string;}

const CartPopup = ({ className }: CartPopupProps) => {
    
  const totalprice = cartList.reduce((all, item) => all + item.price * item.qty, 0);

  return (
    <div className={`bg-white shadow-xl shadow-black/10 border border-gray-200 w-95 z-50 ${className}`}>
      <div className="p-4 border-b border-gray-200 font-bold text-center">
        Shopping Cart
      </div>
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
              <div className=" text-primary">{priceFormatter(item.price)}</div>
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
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-md">Total</div>
          <div className="text-primary text-sm">{priceFormatter(totalprice)}</div>
        </div>
        <Button className="w-full mt-4 px-10" variant="dark">Checkout Now
            <FiArrowRight size={20}/>
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;
