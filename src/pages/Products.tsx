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

  const { bookSearch } = useAppSelector((state) => state.search);
  console.log(bookSearch);
  const { data: bookSearchResult } = useSearchQuery(bookSearch);
  console.log(bookSearchResult);
  const { toast } = useToast();

  let content;

  if (!isError && !isLoading && data?.data?.length > 0) {
    content =
      bookSearch === ''
        ? data?.data?.map((product: IProduct) => (
            <ProductCard key={product._id} product={product} />
          ))
        : Array.isArray(bookSearchResult) // Check if bookSearchResult is an array
        ? bookSearchResult.map((product: IProduct) => (
            <ProductCard key={product._id} product={product} />
          ))
        : null; // Return null or a placeholder if bookSearchResult is not an array
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-6 max-w-7xl mx-auto relative">
        <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
          {content}
        </div>
      </div>
    </React.Fragment>
  );
}
