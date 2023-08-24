/* eslint-disable @typescript-eslint/no-unused-vars */
import ProductCard from '@/components/ProductCard';
import { useToast } from '@/components/ui/use-toast';
import { useSearchQuery } from '@/redux/feature/bookSearch/searchApi';
import { useGetProductsQuery } from '@/redux/feature/product/productApi';
import { useAppSelector } from '@/redux/hook';
import { IProduct } from '@/types/globalTypes';
import React from 'react';

export default function Products() {
  const { data, isLoading, isError } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  console.log(isLoading);
  console.log(isError);

  const { bookSearch } = useAppSelector((state) => state.search);

  // const { data: bookSearchResult } = useSearchQuery(bookSearch);

  useToast();

  // let content;

  // if (!isError && !isLoading && data?.data?.length > 0) {
  //   content =
  //     bookSearch === ''
  //       ? data?.data?.map((product: IProduct) => (
  //           <ProductCard key={product._id} product={product} />
  //         ))
  //       : Array.isArray(bookSearchResult)
  //       ? bookSearchResult.map((product: IProduct) => (
  //           <ProductCard key={product._id} product={product} />
  //         ))
  //       : null;
  // }

  return (
    <React.Fragment>
      <div className="grid grid-cols-6 max-w-7xl mx-auto relative">
        <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
          {data?.data?.map((product: IProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
