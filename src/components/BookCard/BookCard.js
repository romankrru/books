import React from 'react';

import styles from './BookCard.css';
import Button from '../Button/Button';

const BookCard = props => {
  const { data } = props;

  return (
    <li className={styles.BookCard}>
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
        <Button>Edit</Button>
        <Button
          onClick={() => props.onBookRemove(data.id)}
        >
          Delete
        </Button> 
      </div>
    </li>
  );
};

export default BookCard;