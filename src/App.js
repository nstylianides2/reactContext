import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Parent from "./Components/Parent";
import { ButtonState } from "./States/ButtonState";

const App = () => {
  const [clickedCount, setClickedCount] = useState(0);

  const buttonClicked = () => {
    setClickedCount(clickedCount + 1);
  };

  useEffect(() => {}, []);

  return (
    <>
      <button onClick={buttonClicked}>Click Me</button>
      <ButtonState.Provider value={{ buttonCount: clickedCount }}>
        <Parent></Parent>
      </ButtonState.Provider>
    </>
  );
};
export default App;
