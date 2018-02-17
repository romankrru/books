import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './BookControls.css';
import * as actionCreators from '../../store/actions';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';

class BookControls extends Component {
  static defaultProps = {
    currentlyEditingBook: null,
  }

  static propTypes = {
    addBook: PropTypes.func.isRequired,
    editingFail: PropTypes.func.isRequired,
    editingSuccess: PropTypes.func.isRequired,
    currentlyEditingBook: PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      year: PropTypes.string,
      pages: PropTypes.string,
    }),
  }

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
      nextProps.currentlyEditingBook &&
      nextProps.currentlyEditingBook !== this.props.currentlyEditingBook
    ) {
      const newFields = this.state.fields.map(field => ({
        ...field,
        value: nextProps.currentlyEditingBook[field.name],
      }));

      this.setState({
        fields: newFields,
      });
    }
  }

  onFieldChange = (newValue, fieldName) => {
    const fieldIndex = this.state.fields.findIndex(field => field.name === fieldName);

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

  getBookData = () => this.state.fields.reduce((acc, field) => {
    acc[field.name] = field.value;
    return acc;
  }, {})

  resetInputFields = () => {
    const newFields = this.state.fields.map(field => ({
      ...field,
      value: '',
    }));

    this.setState({
      fields: newFields,
    });
  }

  render() {
    const fields = this.state.fields.map((field, i) => (
      <TextInput
        // indexes as keys are safe in this case
        /* eslint-disable react/no-array-index-key */
        key={i}
        /* eslint-enable react/no-array-index-key */
        id={String(i)}
        label={field.label}
        name={field.name}
        placeholder={field.placeholder}
        value={field.value}
        onChange={this.onFieldChange}
      />
    ));

    let bookControls = (
      <div>
        <h2>Add new book</h2>
        {fields}
        <Button
          fullWidth
          size="lg"
          onClick={this.onBookAddClick}
        >
          Add
        </Button>
      </div>
    );

    if (this.props.currentlyEditingBook) {
      bookControls = (
        <div>
          <h2>Edit book:</h2>
          {fields}
          <div className={styles.ButtonsGroup}>
            <Button
              className={styles.ButtonsGroupButton}
              onClick={this.onBookEditingCancel}
              btnType="danger"
              size="lg"
            >
              Cancel
            </Button>
            <Button
              className={styles.ButtonsGroupButton}
              onClick={this.onBookEditingSuccess}
              size="lg"
            >
              Save
            </Button>
          </div>
        </div>
      );
    }

    return bookControls;
  }
}


const mapStateToProps = state => ({
  currentlyEditingBook: state.booksList.find(book => book.id === state.currentlyEditingBookId),
});

const mapDispatchToProps = dispatch => ({
  addBook: bookData => dispatch(actionCreators.addBook(bookData)),
  editingFail: () => dispatch(actionCreators.editingFail()),
  editingSuccess: newBookData => dispatch(actionCreators.editingSucces(newBookData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookControls);
