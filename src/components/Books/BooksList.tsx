import { FC } from 'react';
import { observable } from 'mobx';
import { bookStore } from '../../store';
import { Book } from './Book';
import { Spinner } from '../Spinner';

const BooksList: FC = () => {
  const { isLoading, books } = bookStore;
  return (
    <section>
      {isLoading ? (
        <Spinner />
      ) : (
        books.map(({ key, cover, title, author }) => (
          <Book key={key} title={title} author={author} cover={cover} />
        ))
      )}
    </section>
  );
};

export default observable(BooksList);
