/* eslint-disable @typescript-eslint/no-unused-vars */
import ProductCard from '@/components/ProductCard';
import { useToast } from '@/components/ui/use-toast';
import { useGetProductsQuery } from '@/redux/api/apiSlice';
import { IProduct } from '@/types/globalTypes';

export default function Products() {
  const { data, isLoading } = useGetProductsQuery(undefined);
  console.log(data);
  const { toast } = useToast();

  //! Dummy Data

  // const status = true;
  // const priceRange = 100;

  //! **

  const handleSlider = (value: number[]) => {
    console.log(value);
  };

  // let productsData;

  // if (status) {
  //   productsData = data?.data?.filter(
  //     (item: { status: boolean; price: number }) =>
  //       item.status === true && item.price < priceRange
  //   );
  // } else if (priceRange > 0) {
  //   productsData = data?.data?.filter(
  //     (item: { price: number }) => item.price < priceRange
  //   );
  // } else {
  //   productsData = data?.data;
  // }

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
