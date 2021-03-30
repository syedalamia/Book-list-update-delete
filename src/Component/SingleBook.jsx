import React, { useState } from "react";

export default function SingleBook(props) {
  const [stateChanger, setstateChanger] = useState(false);

  const changeValstate = (value) => {
    setstateChanger(value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setstateChanger(false);
    }
  };
  return (
    <>
      {stateChanger ? (
        <>
          <p>
            the name of the mobile is{" "}
            <input
              onKeyPress={handleKeyPress}
              onChange={(e) => {
                props.updateBookValue(props.singleOne.id, e.target.value);
              }}
              value={props.singleOne.name}
              type="text"
            ></input>
          </p>
          <p>the number of that book is {props.singleOne.phone}</p>
          <button onClick={() => props.deleteBookValue(props.singleOne.id)}>
            delete one book from here
          </button>
          <span>press ENTER to save your edited value</span>
        </>
      ) : (
        <>
          <p>the name of the mobile is {props.singleOne.name}</p>
          <p>the number of that book is {props.singleOne.phone}</p>
          <button onClick={() => props.deleteBookValue(props.singleOne.id)}>
            delete one book from here
          </button>
          <button onClick={() => changeValstate(true)}>
            do you want to change the value?
          </button>
        </>
      )}
    </>
  );
}
