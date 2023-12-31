import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { usePostBookMutation } from '@/redux/feature/addbook/addbookApi';
import { FormEvent, useState } from 'react';

export default function Addbook() {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [image, setImageLink] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const [postBook, { isLoading, isError, isSuccess }] = usePostBookMutation();

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      description: 'Your Book Added',
    });
    const publicationTimestamp = new Date().toISOString();

    postBook({
      title,
      author,
      genre,
      date: publicationTimestamp,
      image,
      price,
    });

    setTitle('');
    setAuthor('');
    setGenre('');
    setDate('');
    setImageLink('');
    setPrice('');
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-3xl w-full">
        <h1 className="mb-2">Give Me Your Book Information</h1>
        <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
          <form className="flex gap-5" onSubmit={handleSubmit}>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="title">Book Title</Label>
                <Input
                  type="text"
                  id="title"
                  className="mt-2"
                  placeholder="Enter Your Title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div>
                <Label htmlFor="author">Author Name</Label>
                <Input
                  type="text"
                  id="author"
                  className="mt-2"
                  placeholder="Enter Your Author Name"
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author}
                />
              </div>
              <div>
                <Label htmlFor="genre">Genre</Label>
                <Input
                  type="text"
                  id="genre"
                  className="mt-2"
                  placeholder="Enter Your Genre"
                  onChange={(e) => setGenre(e.target.value)}
                  value={genre}
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
                  placeholder="Enter Your Date"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
              </div>
              <div>
                <Label htmlFor="image">Image Link</Label>
                <Input
                  type="text"
                  id="image"
                  className="mt-2"
                  placeholder="Enter Your Image"
                  onChange={(e) => setImageLink(e.target.value)}
                  value={image}
                />
              </div>
              <div>
                <Label htmlFor="price">Price</Label>
                <Input
                  type="text"
                  id="price"
                  className="mt-2"
                  placeholder="Enter Your Price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
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
