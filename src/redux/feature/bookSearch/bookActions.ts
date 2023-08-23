// import { IProduct } from '@/types/globalTypes';

// // bookActions.ts
// export const SEARCH_BOOKS = 'SEARCH_BOOKS';
// export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';

// export interface SearchBooksAction {
//   type: typeof SEARCH_BOOKS;
//   payload: string;
// }

// export interface SetSearchResultsAction {
//   type: typeof SET_SEARCH_RESULTS;
//   payload: IProduct[]; // Assuming you have a Book interface defined
// }

// export type BookActionTypes = SearchBooksAction | SetSearchResultsAction;

// export const searchBooks = (query: string): SearchBooksAction => {
//   return {
//     type: SEARCH_BOOKS,
//     payload: query,
//   };
// };

// export const setSearchResults = (
//   results: IProduct[]
// ): SetSearchResultsAction => {
//   return {
//     type: SET_SEARCH_RESULTS,
//     payload: results,
//   };
// };
