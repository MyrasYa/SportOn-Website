import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";

const ProductsImage = [
  {
    name: "SportsOn Hyperfast Shoes",
    type: "Running",
    price: 329000,
    imgUrl: "1.svg"
  },

  {
    name: "SportsOn Rockets Tennis",
    type: "Tennis",
    price: 999000,
    imgUrl: "2.svg"
  },

  {
    name: "SportsOn Slowlivin",
    type: "Running",
    price: 199000,
    imgUrl: "3.svg"
  },

  {
    name: "SportsOn HyperSoccer v2",
    type: "Football",
    price: 458000,
    imgUrl: "4.svg"
  },

  {
    name: "Professional Basketball",
    type: "Basketball",
    price: 359000,
    imgUrl: "5.svg"
  },

  {
    name: "SportsOn Slowlivin",
    type: "Running",
    price: 119000,
    imgUrl: "6.svg"
  },

  {
    name: "SportsOn Hyperfast Shoes",
    type: "Running",
    price: 329000,
    imgUrl: "7.svg"
  },

  {
    name: "SportsOn Rockets Tennis",
    type: "Running",
    price: 999000,
    imgUrl: "8.svg"
  },
];

const ProductSection = () => {
  return (
    <section id="product-section" className="container mx-auto mt-35">
      <h2 className="font-bold italic text-4xl text-center mb-13">
        <span className="text-primary">OUR</span> PRODUCT
      </h2>

      {/* Products */}
      <div className="grid grid-cols-4 gap-5">
        {
            ProductsImage.map((products, index) => (
                <Link href="#" key={index} className="p-1.5 bg-white hover:drop-shadow-2xl duration-150 transition-all">
                    <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
                        <Image src={`/images/products/${products.imgUrl}`}  alt={products.name} width={300} height={300} className="aspect-square" />
                        <Button className="w-10 h-10 p-2! absolute right-3 top-3"><FiPlus size={24} /></Button>
                    </div>

                    <h3 className="font-medium text-lg mb-1.5 mt-4">{products.name}</h3>

                    <div className="flex justify-between mb-8">
                        <div className="text-gray-500">{products.type}</div>
                        <div className="text-primary font-medium">{Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumSignificantDigits: 3, }).format(products.price)}</div>
                    </div>
                </Link>
            ))
        }
      </div>
    </section>
  );
};

export default ProductSection;
