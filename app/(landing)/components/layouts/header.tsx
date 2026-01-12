import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-10 px-[73px] py-[21px]">
        <Image src="/images/Logo.svg" alt="sporton-logo" width={127} height={30}/>

        <nav className="flex gap-40 ">
            <Link href="#">Home</Link>
            <Link href="#">Category</Link>
            <Link href="#">Explore Products</Link>
        </nav>

        <div className="flex gap-13">
            <FiSearch className="w-5 h-5" />
            <FiShoppingBag  className="w-5 h-5" />
        </div>
    </header>
  );
};

export default Header;
