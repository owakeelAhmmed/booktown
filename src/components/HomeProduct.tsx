import { IProduct } from '@/types/globalTypes';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useGetProductsQuery } from '@/redux/api/apiSlice';

export default function HomeProduct() {
  // Fetch data using the useGetProductsQuery hook
  const { data, isLoading, isError } = useGetProductsQuery(undefined);

  // Handle loading state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Handle error state
  if (isError) {
    return <p>Error loading products</p>;
  }

  return (
    <>
      <div className="grid grid-cols-6 max-w-7xl mx-auto relative ">
        <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
          {data?.data?.map((product: IProduct) => (
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
