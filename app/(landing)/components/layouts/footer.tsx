import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate mt-40 text-white px-4">
      <div className="container mx-auto justify-between pt-14 pb-24 block lg:flex lg:justify-between sm:text-[20px]">
        <div className="w-full sm:w-105">
          <Image
            src="/images/logo-footer.svg"
            alt="logo-footer"
            width={167}
            height={44}
          />
          <p className="mt-8 max-w-[420px] leading-relaxed text-sm sm:text-base">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>

        <div className="grid grid-cols-2 pt-15 w-full sm:w-105">
          <div className="flex gap-7 flex-col">
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Products</Link>
            <Link href="#">About Us</Link>
          </div>
          <div className="flex gap-7 flex-col">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Tiktok</Link>
            <Link href="#">Youtube</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white/15">
        <div className="container mx-auto py-6.5 flex justify-between ">
          <div className="mr-5">SportsOn © 2025 All Rights Reserverd.</div>
          <div className="grid grid-cols-2 w-full sm:w-105">
            <Link href="#" className="mx-2">Privacy Policy</Link>
            <Link href="#" className="mr-4">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
