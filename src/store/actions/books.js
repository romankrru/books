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

export const editingStart = (id) => {
  return {
    type: actionTypes.EDITING_START,
    id,
  };
};

export const editingSucces = (newBookData) => {
  return {
    type: actionTypes.EDITING_SUCCES,
    newBookData,
  };
};

export const editingFail = () => {
  return {
    type: actionTypes.EDITING_FAIL,
  };
};
