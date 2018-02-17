import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import List from '../../components/List/List';
import BookCard from '../../components/BookCard/BookCard';
import Plug from '../../components/Plug/Plug';

const BooksList = (props) => {
  const books = props.booksList.map(book => (
    <BookCard
      key={book.id}
      data={book}
      isEditing={props.currentlyEditingBookId === book.id}
      onBookRemove={props.onBookRemove}
      onEditingStart={props.onEditingStart}
    />
  ));

  return (
    <Fragment>
      <h2>List of books</h2>
      <List>
        {books.length ?
          books :
          <Plug>
            There are no books yet... Please add some.
          </Plug>
        }
      </List>
    </Fragment>
  );
};

BooksList.defaultProps = {
  booksList: [],
  currentlyEditingBookId: '',
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
  currentlyEditingBookId: PropTypes.string,
};

const mapStateToProps = state => ({
  booksList: state.booksList,
  currentlyEditingBookId: state.currentlyEditingBookId,
});

const mapDispatchToProps = dispatch => ({
  onBookRemove: bookId => dispatch(actions.removeBook(bookId)),
  onEditingStart: bookId => dispatch(actions.editingStart(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
