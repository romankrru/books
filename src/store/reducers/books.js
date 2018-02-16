import * as actionTypes from '../actions/actionTypes';

export const initialState = {
  currentlyEditingBookId: null,
  booksList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return {
        ...state,
        booksList: [
          ...state.booksList,
          action.bookData,
        ],
      };

    case actionTypes.REMOVE_BOOK:
      return {
        ...state,
        booksList: state.booksList.filter(book =>
          book.id !== action.id
        ),
      };

    case actionTypes.EDITING_START:
      return {
        ...state,
        currentlyEditingBookId: action.id,
      };

    case actionTypes.EDITING_FAIL:
      return {
        ...state,
        currentlyEditingBookId: null,
      }

    case actionTypes.EDITING_SUCCES: {
      const { booksList } = state;

      const bookIndex = booksList.findIndex(book =>
        book.id === state.currentlyEditingBookId
      );

      return {
        ...state,
        currentlyEditingBookId: null,
        booksList: [
          ...booksList.slice(0, bookIndex),
          {
            id: state.currentlyEditingBookId,
            ...action.newBookData
          },
          ...booksList.slice(bookIndex + 1),
        ],
      };
    }

    default:
      return state;
  }
};

export default reducer;