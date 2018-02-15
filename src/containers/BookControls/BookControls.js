import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';

class BookControls extends Component {
  state = {
    fields: [
      {
        name: 'author',
        label: 'Author',
        placeholder: '',
        value: '',
      },
      {
        name: 'name',
        label: 'Book',
        placeholder: '',
        value: '',
      },
      {
        name: 'year',
        label: 'Year',
        placeholder: '',
        value: '',
      },
      {
        name: 'pages',
        label: 'Pages',
        placeholder: '',
        value: '',
      },
    ],
  }

  onFieldChange = (newValue, fieldName) => {
    const fieldIndex = this.state.fields.findIndex(field => {
      return field.name === fieldName;
    });

    const { fields } = this.state;

    const newFileds = [
      ...fields.slice(0, fieldIndex),
      {
        ...fields[fieldIndex],
        value: newValue,
      },
      ...fields.slice(fieldIndex + 1),
    ];

    this.setState({
      fields: newFileds,
    });
  }

  onBookAddClick = () => {
    const bookData = this.state.fields.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});

    this.props.addBook(bookData);
  }

  render() {
    const fields = this.state.fields.map((field, i) => {
      return (
        <TextInput
          key={i}
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          value={field.value}
          onChange={this.onFieldChange}
        />
      );
    });

    return (
      <div>
        {fields}
        <Button
          fullWidth
          onClick={this.onBookAddClick}
        >
          Add new book
      </Button>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  isEditing: state.isEditing,
});

const mapDispatchToProps = dispatch => ({
  addBook: (bookData) => dispatch(actionCreators.addBook(bookData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookControls);