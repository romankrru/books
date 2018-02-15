import React from 'react';

import List from '../../components/List/List';
import BookCard from '../../components/BookCard/BookCard';

const BooksList = props => {
  const booksMock = [
    {
      id: 1,
      author: 'Book author',
      name: 'book name',
      year: '1923',
      pages: '345'
    }
  ]

  const books = booksMock.map(book => {
    return (
      <BookCard
        key={book.id}
        data={book}
      />
    )
  });

  return (
    <List>
      {books}
    </List>
  );
};

export default BooksList;