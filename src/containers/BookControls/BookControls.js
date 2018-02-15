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

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.currentlyEditingBook !== undefined &&
      nextProps.currentlyEditingBook !== this.props.currentlyEditingBook
    ) {    
      const newFields = this.state.fields.map(field => {
        return {
          ...field,
          value: nextProps.currentlyEditingBook[field.name],
        }
      });

      this.setState({
        fields: newFields,
      });
    }
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

  resetInputFields = () => {
    const newFields = this.state.fields.map(field => {
      return {
        ...field,
        value: '',
      };
    });

    this.setState({
      fields: newFields,
    });
  }

  getBookData = () => {
    return this.state.fields.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});
  }

  onBookAddClick = () => {
    const bookData = this.getBookData();

    this.props.addBook(bookData);
    this.resetInputFields();
  }

  onBookEditingCancel = () => {
    this.props.editingFail();
    this.resetInputFields();
  }

  onBookEditingSuccess = () => {
    const newBookData = this.getBookData();

    this.props.editingSuccess(newBookData);
    this.resetInputFields();
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

    let bookControls = (
      <div>
        <p>Add new book:</p>
        {fields}
        <Button
          fullWidth
          onClick={this.onBookAddClick}
        >
          Add
        </Button>
      </div>
    );

    if (this.props.currentlyEditingBook) {
      bookControls = (
        <div>
          <p>Edit book:</p>
          {fields}
          <Button
            onClick={this.onBookEditingCancel}
          >
            Cancel
          </Button>
          <Button
            onClick={this.onBookEditingSuccess}
          >
            Save
          </Button>
        </div>
      );
    }

    return bookControls;
  }
}


const mapStateToProps = state => ({
  currentlyEditingBook: state.booksList.find(book => {
    return book.id === state.currentlyEditingBookId
  }),
});

const mapDispatchToProps = dispatch => ({
  addBook: (bookData) => dispatch(actionCreators.addBook(bookData)),
  editingFail: () => dispatch(actionCreators.editingFail()),
  editingSuccess: (newBookData) => dispatch(actionCreators.editingSucces(newBookData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookControls);