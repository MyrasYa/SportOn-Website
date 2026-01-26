import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiEdit2, FiTrash } from "react-icons/fi";

const categoryData = [
  {
    name: "Running",
    imageUrl: "/images/categories/category-running.svg",
    description: "lorem ipsum"
  },
  {
    name: "Football",
    imageUrl: "/images/categories/category-football.svg",
    description: "lorem ipsum"
  },
  {
    name: "Basketball",
    imageUrl: "/images/categories/category-basketball.svg",
    description: "lorem ipsum"
  },
  
];

const CategoryTable = () => {
  return (
    <div className="bg-white roounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border border-gray-100">
            <th className="px-6 py-4 font-semibold">Category Name</th>
            <th className="px-6 py-4 font-semibold">Description</th>
            <th className="px-6 py-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categoryData.map((data, index) => (
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
              <td className="px-3 py-4 font-medium">
                <div className="rounded-md  text-center  px-3 py-1 w-fit">{data.description}</div>
              </td>
          
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

export default CategoryTable;
