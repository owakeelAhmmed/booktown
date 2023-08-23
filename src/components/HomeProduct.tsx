import { IProduct } from '@/types/globalTypes';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useGetProductsQuery } from '@/redux/feature/product/productApi';

export default function HomeProduct() {
  const { data, isLoading, isError } = useGetProductsQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading products</p>;
  }

  return (
    <>
      <div className="grid grid-cols-6 max-w-7xl mx-auto relative ">
        <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
          {data?.data?.slice(0, 10).map((product: IProduct) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button>
          <Link to="/products">All products</Link>
        </Button>
      </div>
    </>
  );
}
