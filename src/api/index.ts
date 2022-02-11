import { API_URL, FETCH_ERROR } from '../constants';
import { Book } from '../interfaces';

export const searchBook = async (query: string, searchingByAuthor: boolean) => {
  const url = new URL(API_URL);
  searchingByAuthor ? url.searchParams.set('author', query) : url.searchParams.set('q', query);

  try {
    const response = await fetch(url.toString());
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message ? data.message : FETCH_ERROR);
    }

    const books: Book[] = data.docs.map(({ key, title, author_name, cover_i }: any) => ({
      key,
      title,
      author: author_name?.join(', '),
      cover: cover_i,
    }));

    return books;
  } catch (error: any) {
    return Promise.reject(error.message ? error.message : FETCH_ERROR);
  }
};
