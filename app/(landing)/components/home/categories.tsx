import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const categoriesImage = [
  {
    name: "Running",
    imgUrl: "category-running.svg",
  },

  {
    name: "Tennis",
    imgUrl: "category-raket.svg",
  },

  {
    name: "Basketball",
    imgUrl: "category-basketball.svg",
  },

  {
    name: "Football",
    imgUrl: "category-football.svg",
  },

  {
    name: "Badminton",
    imgUrl: "category-badminton.svg",
  },

  {
    name: "Swimming",
    imgUrl: "category-swimming.svg",
  },
];

const CategoriesSection = () => {
  return (
    <section id="category-section" className="container mx-auto mt-40">
      <div className="w-full px-18 flex justify-between items-center">
        <h2 className="font-bold text-2xl"> Browse By Categories</h2>
        <div className="flex justify-center items-center gap-2 text-primary">
          <Link href="#" className="font-medium text-base">
            See All Categories
          </Link>
          <GoArrowRight />
        </div>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-6 gap-5.5 2xl:gap-16 mt-7 mx-18 ">
        {categoriesImage.map((categories, index) => (
          <div
            className="rounded-lg bg-linear-to-r from-[#F1F1F1] to-[#F7F7F7] aspect-square w-full flex justify-center px-5 py-5 2xl:px-6 2xl:py-6 mx-auto"
            key={index}
          >
            <div className="self-center">
              <Image
                src={`/images/categories/${categories.imgUrl}`}
                width={77}
                height={77}
                alt={categories.name}
                className="mb-3.25 "
              />

              <div className="text-primary font-medium text-md text-center ">
                {categories.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
