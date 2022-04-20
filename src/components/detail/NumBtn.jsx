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
      <Total>
        <Box>
          <Btn onClick={min}>
            <i className="fa-solid fa-minus"></i>
          </Btn>
          <label htmlFor="1">
            <Input type="number" id="1" />
            {number}
          </label>

          <Btn onClick={max}>
            <i class="fa-solid fa-plus-large"></i>
          </Btn>
        </Box>
      </Total>
    </>
  );
};

export default NumBtn;

const Input = styled.input`
  width: fit-content;
  display: none;
`;

const Total = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  margin-left: 20px;
  width: 80px;
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
  background-color: white;
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
  outline: none;
  cursor: pointer;
  font-size: 12px;
`;
