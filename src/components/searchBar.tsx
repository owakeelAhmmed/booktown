import { useDispatch, useSelector } from 'react-redux';
import { ISearch, setSearchTerm } from '@/redux/feature/cart/searchSlice';
import { Input } from './ui/input';
import { BookList } from './bookList';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: ISearch) => state.books);

  const handleSearch = (value: string) => {
    dispatch(setSearchTerm(value));
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <Input
        type="text"
        placeholder="Search by title, author, or genre"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-80"
      />
      <BookList />
    </div>
  );
};

export { SearchBar };
