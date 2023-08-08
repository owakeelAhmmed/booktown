import { IProduct } from '@/types/globalTypes';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function HomeProduct() {
  const [productsData, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-6 max-w-7xl mx-auto relative ">
        <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
          {productsData?.map((product) => (
            <ProductCard product={product} />
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
