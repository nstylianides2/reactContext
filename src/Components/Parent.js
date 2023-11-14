import React, { useEffect, useState } from "react";
import Child from "./Child";

const Parent = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Child></Child>
    </>
  );
};
export default Parent;
