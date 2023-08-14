/* eslint-disable @typescript-eslint/no-unused-vars */
import { IProduct } from '@/types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hook';
import { addToCart } from '@/redux/feature/cart/cartSlice';

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  console.log(product);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const dispatch = useAppDispatch();
  const handleAddProduct = (product: IProduct) => {
    dispatch(addToCart(product));
    toast({
      description: 'Your Book Added',
    });
  };
  return (
    <div>
      <div className="rounded-2xl h-[550px] w-[300px] flex flex-col items-center justify-center p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/product-details/${product._id}`} className="w-full ">
          <img
            className="w-full h-[300px]"
            src={product?.image}
            alt="product"
          />
          <h1 className="text-xl font-semibold text-center">
            {product?.title}
          </h1>
        </Link>
        <p className="text-sm">Author: {product?.author}</p>
        <p className="text-sm">Genre: {product?.genre}</p>
        <p className="text-sm">Publication Date: {product?.publication}</p>
        <p className="text-sm">Price: {product?.price}</p>
        <p>Rating: {product?.rating}</p>
        {!isHomePage && (
          <Button variant="default" onClick={() => handleAddProduct(product)}>
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}
