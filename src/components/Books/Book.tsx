import { FC } from 'react';
import type { Book as BookProps } from '../../interfaces';
import { BOOK_COVER_URL } from '../../constants';

export const Book: FC<BookProps> = ({ title, author, cover }) => {
  return (
    <div className="book">
      <img className="image" src={`${BOOK_COVER_URL}${cover}`} alt={title} />
      <div className="info">
        <p className="title">{title}</p>
        <p className="author">{author}</p>
      </div>
    </div>
  );
};
