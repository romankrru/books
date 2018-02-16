import uuidv4 from 'uuid/v4';

import * as actionTypes from './actionTypes';

export const addBook = bookData => ({
  type: actionTypes.ADD_BOOK,
  bookData: {
    id: uuidv4(),
    ...bookData,
  },
});

export const removeBook = id => ({
  type: actionTypes.REMOVE_BOOK,
  id,
});

export const editingStart = id => ({
  type: actionTypes.EDITING_START,
  id,
});

export const editingSucces = newBookData => ({
  type: actionTypes.EDITING_SUCCES,
  newBookData,
});

export const editingFail = () => ({
  type: actionTypes.EDITING_FAIL,
});
