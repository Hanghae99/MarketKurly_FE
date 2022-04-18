import React from "react";
import styled from "styled-components";

const NumBtn = () => {
  return (
    <>
      <Box>
        <Btn>-</Btn>
        <Input type="number" placeholder={1} />
        <Btn>+</Btn>
      </Box>
    </>
  );
};

export default NumBtn;

const Input = styled.input`
  width: 20px;
`;

const Box = styled.div`
  width: 88px;
  height: 30px;
  border: 1px solid #dddfe1;
  border-radius: 3px;
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
`;
