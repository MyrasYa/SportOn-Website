import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate text-white px-4">
      <div className="container mx-auto justify-between pt-14 pb-24 block lg:flex lg:justify-between sm:text-[20px]">
        <div className="w-full sm:w-105">
          <Image
            src="/images/logo-footer.svg"
            alt="logo-footer"
            width={167}
            height={44}
          />
          <p className="mt-8 max-w-[435px] leading-relaxed text-sm md:text-xl">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>

        <div className="sm:grid grid-cols-2 pt-15 w-full sm:w-105 sm:text-base grid-cols-1">
          <div className="flex gap-7 flex-col mb-8">
            <Link href="#" className="hover:text-primary duration-150">Home</Link>
            <Link href="#" className="hover:text-primary duration-150">Categories</Link>
            <Link href="#" className="hover:text-primary duration-150">Products</Link>
            <Link href="#" className="hover:text-primary duration-150">About Us</Link>
          </div>
          <div className="flex gap-7 flex-col">
            <Link href="#" className="hover:text-primary duration-150">Instagram</Link>
            <Link href="#" className="hover:text-primary duration-150">Facebook</Link>
            <Link href="#" className="hover:text-primary duration-150">Tiktok</Link>
            <Link href="#" className="hover:text-primary duration-150">Youtube</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white/15">
        <div className="container mx-auto py-6.5 flex justify-between text=base ">
          <div className="mr-8">SportsOn © 2025 All Rights Reserverd.</div>
          <div className="grid grid-cols-2 w-full sm:w-105 ">
            <Link href="#" className="mr-2 hover:text-primary duration-150">Privacy Policy</Link>
            <Link href="#" className="mr-4 hover:text-primary duration-150">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
