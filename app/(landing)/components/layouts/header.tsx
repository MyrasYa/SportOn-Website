"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { BsCaretDown } from "react-icons/bs";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full relative bg-white">
      <div className="container mx-auto px-5 py-6 sm:px-6  lg:px-8 xl:px-12 h-full flex items-center justify-between">
        <Image
          src="/images/Logo.svg"
          alt="sporton-logo"
          width={127}
          height={30}
        />

        <nav className="hidden lg:flex gap-8 font-medium items-center lg:gap-25">
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

        <div className="flex items-center gap-4 lg:gap-8">
          <button onClick={() => setOpen(!open)} className="lg:hidden">
            <BsCaretDown
              className={`w-8 h-8 transition-all duration-200 
            ${open ? "rotate-180 text-primary" : "hover:text-primary"}`}
            />
          </button>
          <FiSearch className="w-6 h-6 hover:text-primary transition-all duration-150" />
          <div className="relative">
            <FiShoppingBag className="w-6 h-6 hover:text-primary transition-all duration-150" />
            <div className="absolute bg-primary rounded-full w-3.5 h-3.5 bottom-3.5 left-3 opacity-[.90] text-[11px] text-white text-center">
              3
            </div>
          </div>

          {open && (
            <div className="absolute top-14 right-0 w-xs bg-white shadow-lg z-50 lg:hidden sm:right-5">
              <ul className="flex flex-col gap-4 p-6 text-sm">
                <li className="hover:text-primary transition">Home</li>
                <li className="hover:text-primary transition">Shop</li>
                <li className="hover:text-primary transition">About</li>
                <li className="hover:text-primary transition">Contact</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

// flex justify-between items-center gap-10 container mx-auto py-5 2xl:mx-auto
// nav lama

// flex gap-35 font-medium mx-auto
// navlink lama
