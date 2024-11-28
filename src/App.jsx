import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './featurs/Store';
import BookList from './components/BookLists';
import BookForm from './components/BookForm';
import { Row } from 'react-bootstrap';

const App = () => {
  const [editing, setEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <Provider store={store}>
      <div >
      
        <h1>Book Management System</h1>
        <BookForm currentBook={currentBook} setEditing={setEditing} />
        <BookList setCurrentBook={setCurrentBook} setEditing={setEditing} />
      </div>
    </Provider>
  );
};

export default App;
