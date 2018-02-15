import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isEdititng: false,
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

    default:
      return state;
  }
};

export default reducer;