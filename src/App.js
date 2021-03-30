import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import Books from "./Component/Books";

function App() {
  const [bookValue, setBookValue] = useState([
    {
      id: 1,
      name: "samsung",
      phone: "0172133",
    },
    {
      id: 2,
      name: "Motorola",
      phone: "01815600",
    },

    {
      id: 3,
      name: "LG",
      phone: "01815600",
    },
  ]);

  const deleteBook = (selectedbookId) => {
    const newStore = bookValue.filter((bookid) => {
      return bookid.id !== selectedbookId;
    });
    setBookValue(newStore);
  };

  const updateBook = (selectedbookId, selectedbookName) => {
    const newStore = bookValue.map((book) => {
      if (selectedbookId === book.id) {
        return { ...book, name: selectedbookName };
      } else {
        return book;
      }
    });

    setBookValue(newStore);
  };
  return (
    <div className="App">
      {bookValue.length ? (
        <Books
          myBooks={bookValue}
          deleteBookValue={deleteBook.bind(this)}
          updateBookValue={updateBook.bind(this)}
        />
      ) : (
        <p>store is full empty</p>
      )}
    </div>
  );
}

export default App;
