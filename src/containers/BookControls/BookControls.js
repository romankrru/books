import React from 'react';

import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';

const BookControls = props => {
  return (
    <div>
      <TextInput label="Author" />
      <TextInput label="Book" />
      <TextInput label="Year" />
      <TextInput label="Pages" />
      <Button fullWidth>Add new book</Button>
    </div>
  );
};

export default BookControls;