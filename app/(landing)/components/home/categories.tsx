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
    <section
      id="category-section"
      className="relative w-full bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between mb-8 lg:mb-12">
          <h2 className="font-bold text-[20px] sm:text-[24px]">
            {" "}
            Browse By Categories
          </h2>
          <div className="flex justify-center items-center gap-1 text-primary hidden sm:flex">
            <Link href="#" className="font-medium text-base">
              See All Categories
            </Link>
            <GoArrowRight />
          </div>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-6 2xl:gap-16 mt-7">
          {categoriesImage.map((categories, index) => (
            <div
              className="rounded-lg bg-linear-to-r from-[#F1F1F1] to-[#F7F7F7] aspect-square w-full flex justify-center px-5 py-5 mx-auto"
              key={index}
            >
              <div className="self-center">
                <Image
                  src={`/images/categories/${categories.imgUrl}`}
                  width={80}
                  height={80}
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

        {/* Mobile See All */}
        <div className="sm:hidden text-center mt-6">
          <a
            href="#"
            className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#ff5f3f] hover:underline"
          >
            See All Categories
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

// container mx-auto mt-40
// section clsn lama
