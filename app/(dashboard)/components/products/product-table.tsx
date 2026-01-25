import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiEdit2, FiTrash } from "react-icons/fi";

const ProductData = [
  {
    name: "Sport On Product 1",
    imageUrl: "/images/products/1.svg",
    category: "Running",
    price: 289000,
    stock: 3,
  },
  {
    name: "Sport On Product 2",
    imageUrl: "/images/products/2.svg",
    category: "Running",
    price: 289000,
    stock: 3,
  },
  {
    name: "Sport On Product 3",
    imageUrl: "/images/products/3.svg",
    category: "Running",
    price: 289000,
    stock: 3,
  },
  {
    name: "Sport On Product 4",
    imageUrl: "/images/products/4.svg",
    category: "Running",
    price: 289000,
    stock: 3,
  },
];

const ProductTable = () => {
  return (
    <div className="bg-white roounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border border-gray-100">
            <th className="px-6 py-4 font-semibold">Product</th>
            <th className="px-6 py-4 font-semibold">Category</th>
            <th className="px-6 py-4 font-semibold">Price</th>
            <th className="px-6 py-4 font-semibold">Stock</th>
            <th className="px-6 py-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {ProductData.map((data, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 last: border-b-0"
            >
              <td className="px-6 py-4 font-medium">
                <div className="flex gap-4 items-center gap-3">
                  <div className="aspect-square bg-gray-100 rounded-md">
                    <Image
                      src={data.imageUrl}
                      width={52}
                      height={52}
                      alt={data.name}
                      className="aspect-square object-contain"
                    ></Image>
                  </div>
                  <span className="">{data.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 font-medium">
                <div className="rounded-md bg-gray-200 text-center  px-3 py-1 w-fit">{data.category}</div>
              </td>
              <td className="px-6 py-4 font-medium">{priceFormatter(data.price)}</td>
              <td className="px-6 py-4 font-medium">{data.stock}</td>
              <td className="flex gap-3 px-6 py-7.5 items-center h-full  text-gray-500">
                <button className="duration-200 hover:text-gray-200"><FiEdit2 size={20}/></button>
                <button className="duration-200 hover:text-gray-200"><FiTrash size={20}/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
