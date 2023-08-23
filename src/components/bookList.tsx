import { ISearch } from '@/redux/feature/bookSearch/searchSlice';
import { useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector((state: ISearch) => {
    const filteredBooks = state.books.filter(
      (book) =>
        (book.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(state.searchTerm.toLowerCase())) &&
        (state.selectedGenre === '' || book.genre === state.selectedGenre) &&
        (state.selectedYear === '' ||
          book.year.toString() === state.selectedYear)
    );
    return filteredBooks;
  });

  return (
    <ul>
      {books.map((book, index) => (
        <li key={index}>
          <strong>Title:</strong> {book.title}, <strong>Author:</strong>{' '}
          {book.author}, <strong>Genre:</strong> {book.genre}
        </li>
      ))}
    </ul>
  );
};

export { BookList };
