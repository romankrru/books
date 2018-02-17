import React from 'react';
import PropTypes from 'prop-types';

import styles from './BookCard.css';
import Button from '../Button/Button';

const BookCard = (props) => {
  const { data } = props;

  const bookCardClasses = [styles.BookCard];

  if (props.isEditing) {
    bookCardClasses.push(styles.BookCardEditing);
  }

  return (
    <li className={bookCardClasses.join(' ')}>
      <div className={styles.BookCardRow}>
        <h4 className={styles.BookCardHeading}>Author:</h4>{' '}
        <p className={styles.BookCardText}>{data.author}</p>
      </div>
      <div className={styles.BookCardRow}>
        <h4 className={styles.BookCardHeading}>Book name:</h4>{' '}
        <p className={styles.BookCardText}>{data.name}</p>
      </div>
      <div className={styles.BookCardRow}>
        <h4 className={styles.BookCardHeading}>Year:</h4>{' '}
        <p className={styles.BookCardText}>{data.year}</p>
      </div>
      <div className={styles.BookCardRow}>
        <h4 className={styles.BookCardHeading}>Pages:</h4>{' '}
        <p className={styles.BookCardText}>{data.pages}</p>
      </div>
      <div>
        <Button
          onClick={() => props.onEditingStart(data.id)}
          disabled={props.isEditing}
        >
          { props.isEditing ?
            'Editing...' :
            'Edit'
          }
        </Button>
        <Button
          onClick={() => props.onBookRemove(data.id)}
          btnType="danger"
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

BookCard.defaultProps = {
  isEditing: false,
};

BookCard.propTypes = {
  onEditingStart: PropTypes.func.isRequired,
  onBookRemove: PropTypes.func.isRequired,
  data: PropTypes.shape({
    author: PropTypes.string,
    name: PropTypes.string,
    year: PropTypes.string,
    id: PropTypes.string,
    pages: PropTypes.string,
  }).isRequired,
  isEditing: PropTypes.bool,
};

export default BookCard;
