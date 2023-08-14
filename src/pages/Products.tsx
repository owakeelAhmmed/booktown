/* eslint-disable @typescript-eslint/no-unused-vars */
import ProductCard from '@/components/ProductCard';
import { useToast } from '@/components/ui/use-toast';
import { useGetProductsQuery } from '@/redux/api/apiSlice';
import { IProduct } from '@/types/globalTypes';

export default function Products() {
  const { data, isLoading } = useGetProductsQuery(undefined);
  console.log(isLoading);
  const { toast } = useToast();

  // const handleSlider = (value: number[]) => {
  //   console.log(value);
  // };

  return (
    <div className="grid grid-cols-6 max-w-7xl mx-auto relative ">
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {data?.data?.map((product: IProduct) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
