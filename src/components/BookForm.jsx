import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../featurs/books/BookSlice';

const BookForm = ({ currentBook, setEditing }) => {
  const [book, setBook] = useState(currentBook || { title: '', author: '', id: Date.now() });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentBook) {
      dispatch(updateBook(book));
      setEditing(false);
    } else {
      dispatch(addBook(book));
    }
    setBook({ title: '', author: '', id: Date.now() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
        placeholder="Book Title"
        required
        style={{ backgroundColor: 'white', color: "black" }}
        
      />
      <input
        type="text"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
        placeholder="Author Name"
        required
        style={{ backgroundColor: 'white', color: "black" }}
      />
      <button type="submit"
      style={{ backgroundColor: 'red', color: "black" }}>{currentBook ? 'Update' : 'Add'} Book</button>
    </form>
  );
};

export default BookForm;
