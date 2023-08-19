/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { setBookData } from '@/redux/editbook/editBookSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function EditBook() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    date: '',
    image: '',
    price: '',
  });
  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(setBookData(id));
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-3xl w-full">
        <h1 className="mb-2">Delivery Information</h1>
        <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
          <form className="flex gap-5" onSubmit={handleSubmit}>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="title">Book Title</Label>
                <Input
                  type="text"
                  id="title"
                  className="mt-2"
                  onChange={handleInputChange}
                  value={formData.title}
                />
              </div>
              <div>
                <Label htmlFor="author">Author Name</Label>
                <Input
                  type="text"
                  id="author"
                  className="mt-2"
                  onChange={handleInputChange}
                  value={formData.author}
                />
              </div>
              <div>
                <Label htmlFor="genre">Genre</Label>
                <Input
                  type="text"
                  id="genre"
                  className="mt-2"
                  onChange={handleInputChange}
                  value={formData.genre}
                />
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="date">Publication Date</Label>
                <Input
                  type="text"
                  id="date"
                  className="mt-2"
                  onChange={handleInputChange}
                  value={formData.date}
                />
              </div>
              <div>
                <Label htmlFor="image">Image Link</Label>
                <Input
                  type="text"
                  id="image"
                  className="mt-2"
                  onChange={handleInputChange}
                  value={formData.image}
                />
              </div>
              <div>
                <Label htmlFor="price">Price</Label>
                <Input
                  type="text"
                  id="price"
                  className="mt-2"
                  onChange={handleInputChange}
                  value={formData.price}
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Add Book
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
