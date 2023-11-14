import React, { useEffect, useContext } from "react";
import { ButtonState } from "../States/ButtonState";

const Child = () => {
  const { buttonCount } = useContext(ButtonState);

  useEffect(() => {}, []);

  return (
    <>
      <p>{buttonCount}</p>
    </>
  );
};
export default Child;
