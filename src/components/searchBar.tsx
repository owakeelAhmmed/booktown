import { useDispatch } from 'react-redux';
import { Input } from './ui/input';
import { useState } from 'react';
import { setSearchQuery } from '@/redux/feature/bookSearch/searchSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(setSearchQuery(input));
  };

  return (
    <div className="flex justify-between">
      <form onSubmit={handleSubmit}>
        <Input
          type="search"
          name="search"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export { SearchBar };
