/* eslint-disable @typescript-eslint/no-unused-vars */
import ProductCard from '@/components/ProductCard';
import { useToast } from '@/components/ui/use-toast';
import { IProduct } from '@/types/globalTypes';
import { useEffect, useState } from 'react';

export default function Products() {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const { toast } = useToast();

  //! Dummy Data

  const status = true;
  const priceRange = 100;

  //! **

  const handleSlider = (value: number[]) => {
    console.log(value);
  };

  let productsData;

  if (status) {
    productsData = data.filter(
      (item) => item.status === true && item.price < priceRange
    );
  } else if (priceRange > 0) {
    productsData = data.filter((item) => item.price < priceRange);
  } else {
    productsData = data;
  }

  return (
    <div className="grid grid-cols-6 max-w-7xl mx-auto relative ">
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {productsData?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
