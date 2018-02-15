import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import List from '../../components/List/List';
import BookCard from '../../components/BookCard/BookCard';

const BooksList = props => {
  const books = props.booksList.map(book => {
    return (
      <BookCard
        key={book.id}
        data={book}
        onBookRemove={props.onBookRemove}
        onEditingStart={props.onEditingStart}
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

const mapDispatchToProps = dispatch => ({
  onBookRemove: (bookId) => dispatch(actions.removeBook(bookId)),
  onEditingStart: (bookId) => dispatch(actions.editingStart(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);