import priceFormatter from "@/app/utils/price-formatter";
import ProductActions from "../../components/product-detail/product-actions";
import page from "../../page";
import Image from "next/image";

const ProductDetail = () => {
  return (
    <main className="container mx-auto flex py-35 gap-12 my-0 px-12">
        <div className="bg-primary-light flex justify-center items-center min-w-140 aspect-square " >
            <Image src="/images/products/4.svg" width={550} height={550} alt="Product 4 Image" className="w-full aspect-square object-contain"/>
        </div>
        <div className="w-full py-7 mx-auto ">
            <h1 className="font-bold text-5xl mb-6">SportsOn HyperSoccer v2</h1>
             <div className="bg-primary-light text-primary rounded-full py-2 px-6 w-fit mb-5 bg-primary">Football</div>
             <p className="leading-loose mb-7 w-2xl">The SportsOn HyperSoccer v2 is engineered for the player who demands precision, power, and unrivaled speed on the pitch. Featuring a striking, two-toned black and white design with deep crimson accents, these cleats don't just perform—they make a statement. Experience the future of football footwear with v2's enhanced fit and cutting-edge traction.</p>

             <div className="text-primary font-semibold text-[32px] mb-12">
              {priceFormatter(458000)}
             </div>
             <ProductActions />
        </div>
    </main>
  )
}

export default ProductDetail;