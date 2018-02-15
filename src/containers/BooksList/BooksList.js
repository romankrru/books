import React from 'react';
import { connect } from 'react-redux';

import List from '../../components/List/List';
import BookCard from '../../components/BookCard/BookCard';

const BooksList = props => {
  console.log(props)

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

const mapStateToProps = state => ({
  booksList: state.booksList,
});

export default connect(mapStateToProps)(BooksList);