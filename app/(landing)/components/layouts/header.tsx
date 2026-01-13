import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center gap-10 container mx-auto py-5 2xl:mx-auto ">
        <Image
          src="/images/Logo.svg"
          alt="sporton-logo"
          width={127}
          height={30}
        />

        <nav className="flex gap-35 font-medium ">
          <Link
            href="#"
            className="relative after:content-[''] after:block after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:bg-primary after:left-1 after:translate-x-2 after:translate-y-1 after:bottom-0.10 after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300"
          >
            Home
          </Link>
          <Link
            href="#"
            className="relative after:content-[''] after:block after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:bg-primary after:left-1 after:translate-x-3.5 after:translate-y-1 after:bottom-0.10 after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300"
          >
            Category
          </Link>
          <Link
            href="#"
            className="relative after:content-[''] after:block after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:bg-primary after:left-1 after:translate-x-7.5 after:translate-y-1 after:bottom-0.10 after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300"
          >
            Explore Products
          </Link>
        </nav>

        <div className="flex gap-11">
          <FiSearch className="w-6 h-6 hover:text-primary transition-all duration-150" />
          <div className="relative">
            <FiShoppingBag className="w-6 h-6 hover:text-primary transition-all duration-150" />
            <div className="absolute bg-primary rounded-full w-3.5 h-3.5 bottom-3.5 left-3 opacity-[.90] text-[11px] text-white text-center">
              3
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
