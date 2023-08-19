/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import Modal from 'react-modal';
import {
  useDeleteProductMutation,
  useGetSingleProductQuery,
} from '@/redux/feature/product/productApi';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

Modal.setAppElement('#root');

export default function ProductDetails() {
  const { id } = useParams();
  const [deleteBook] = useDeleteProductMutation();
  const { data: product, isLoading, error } = useGetSingleProductQuery(id);
  const navigate = useNavigate();
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);

  const openDeleteConfirmation = () => {
    setIsDeleteConfirmationOpen(true);
  };
  const closeDeleteConfirmation = () => {
    setIsDeleteConfirmationOpen(false);
  };

  const handleDeleteClick = async (productId: string | undefined) => {
    try {
      // Trigger the delete mutation
      closeDeleteConfirmation();
      await deleteBook(productId);
      navigate('/products');
      // After successful deletion, you can navigate the user to a product page
      // or take any other appropriate action
      console.log('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  console.log(isLoading);
  console.log(error);
  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center  ">
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
          <Link to="/editbook">
            <Button className="mr-5 ml-5">Edit</Button>
          </Link>

          <Button onClick={openDeleteConfirmation}>Delete</Button>

          <Modal
            isOpen={isDeleteConfirmationOpen}
            onRequestClose={closeDeleteConfirmation}
            contentLabel="Delete Confirmation"
            className="  mx-auto h-48 w-[400px] border mt-60 p-4 shadow-xl shadow-indigo-500/40 backdrop-blur-md "
          >
            <p className="text-center">
              Are you sure you want to delete this product?
            </p>
            <div className="flex justify-between mt-20">
              <Button onClick={() => handleDeleteClick(id)}>Yes, Delete</Button>
              <Button onClick={closeDeleteConfirmation}>Cancel</Button>
            </div>
          </Modal>
        </div>
      </div>
      <ProductReview id={id!} />
    </>
  );
}
