import React from 'react';
import { connect } from 'react-redux';

import List from '../../components/List/List';
import BookCard from '../../components/BookCard/BookCard';

const BooksList = props => {
  const books = props.booksList.map(book => {
    return (
      <BookCard
        key={book.id}
        data={book}
      />
    )
  });

  return (
    <List>
      { books.length ?
        books :
        'There are no books yet... Please add some.'
      }
    </List>
  );
};

const mapStateToProps = state => ({
  booksList: state.booksList,
});

export default connect(mapStateToProps)(BooksList);