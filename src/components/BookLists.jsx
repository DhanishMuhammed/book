import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../featurs/books/BookSlice';

const BookList = () => {
  const books = useSelector(state => state.books.books);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
