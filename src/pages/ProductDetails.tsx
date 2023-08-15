/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { useGetSingleProductQuery } from '@/redux/feature/product/productApi';
import { useParams } from 'react-router-dom';
export default function ProductDetails() {
  const { id } = useParams();

  const { data: product, isLoading, error } = useGetSingleProductQuery(id);
  console.log(isLoading);
  console.log(error);
  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img className="ml-80" src={product?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <p className="text-xl font-semibold">
            <span className="text-red-500 ">Title: </span>
            {product?.title}
          </p>

          <p className="text-xl font-semibold">
            <span className="text-red-500 ">Author: </span>
            {product?.author}
          </p>
          <p className="text-xl font-semibold">
            <span className="text-red-500 ">Genre: </span>
            {product?.genre}
          </p>
          <p className="text-xl font-semibold">
            <span className="text-red-500 "> Publication: </span>
            {product?.publication}
          </p>
          <p className="text-xl font-semibold">
            <span className="text-red-400 ">Price: </span>
            {product?.price}
          </p>
          <p className="text-xl">Rating: {product?.rating}</p>

          <Button>Add to cart</Button>
        </div>
      </div>
      <ProductReview id={id!} />
    </>
  );
}
