import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import List from '../../components/List/List';
import BookCard from '../../components/BookCard/BookCard';

const BooksList = (props) => {
  const books = props.booksList.map(book => (
    <BookCard
      key={book.id}
      data={book}
      onBookRemove={props.onBookRemove}
      onEditingStart={props.onEditingStart}
    />
  ));

  return (
    <List>
      { books.length ?
        books :
        'There are no books yet... Please add some.'
      }
    </List>
  );
};

BooksList.defaultProps = {
  booksList: [],
};

BooksList.propTypes = {
  onBookRemove: PropTypes.func.isRequired,
  onEditingStart: PropTypes.func.isRequired,
  booksList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    year: PropTypes.string,
    pages: PropTypes.string,
  })),
};

const mapStateToProps = state => ({
  booksList: state.booksList,
});

const mapDispatchToProps = dispatch => ({
  onBookRemove: bookId => dispatch(actions.removeBook(bookId)),
  onEditingStart: bookId => dispatch(actions.editingStart(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
