import priceFormatter from "@/app/utils/price-formatter";
import ProductActions from "../../components/product-detail/product-actions";
import Image from "next/image";
import { get } from "http";
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";

export type TPageProps = {
 params: Promise<{id: string}>;
}

const ProductDetail = async ({params}: TPageProps) => {
  const {id} = await params;

  const product = await getProductDetail(id);

  return (
    <main className="container mx-auto flex py-35 gap-12 my-0 px-12">
        <div className="bg-primary-light flex justify-center items-center min-w-140 aspect-square " >
            <Image src={getImageUrl(product.imageUrl)} width={350} height={400} alt={product.name} className="w-md aspect-square object-contain"/>
        </div>
        <div className="w-full py-7 mx-auto ">
            <h1 className="font-bold text-5xl mb-6">{product.name}</h1>
             <div className="bg-primary-light text-primary rounded-full py-2 px-6 w-fit mb-5 bg-primary">{product.category.name}</div>
             <p className="leading-loose mb-7 w-2xl">{product.description}</p>

             <div className="text-primary font-semibold text-[32px] mb-12">
              {priceFormatter(product.price)}
             </div>
             <ProductActions product={product} stock={product.stock}/>    
        </div>
    </main>
  )
}

export default ProductDetail;