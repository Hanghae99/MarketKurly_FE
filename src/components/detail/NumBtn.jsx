import React from "react";
import { useState } from "react";
import styled from "styled-components";

const NumBtn = () => {
  const [number, setNumber] = useState(1);

  const min = () => {
    if (number <= 1) {
      window.alert("최소주문수량은 1개입니다!");
    } else setNumber(parseInt(number) - 1);
  };

  const max = () => {
    setNumber(parseInt(number) + 1);
  };

  return (
    <>
      <Box>
        <Btn onClick={min}>-</Btn>
        <label htmlFor="1">
          <Input type="number" id="1" />
          {number}
        </label>

        <Btn onClick={max}>+</Btn>
      </Box>
    </>
  );
};

export default NumBtn;

const Input = styled.input`
  width: 20px;
  display: none;
`;

const Box = styled.div`
  width: 88px;
  height: 30px;
  border: 1px solid #dddfe1;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Btn = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  color: #333;
  font-weight: bold;
  background-color: white;
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
  outline: none;
  cursor: pointer;
  font-size: 20px;
`;
