import uuidv4 from 'uuid/v4';

import * as actionTypes from './actionTypes';

export const addBook = (bookData) => {
  return {
    type: actionTypes.ADD_BOOK,
    bookData: {
      id: uuidv4(),
      ...bookData,
    },
  };
};

export const removeBook = (id) => {
  return {
    type: actionTypes.REMOVE_BOOK,
    id,
  };
};

export const editBook = (bookData) => {
  return {
    type: actionTypes.EDIT_BOOK,
    bookData,
  };
};