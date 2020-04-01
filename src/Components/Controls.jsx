import React from "react";
import styled from "@emotion/styled";
import { fontSizes, colors } from "../config";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Label = styled.div`
  font-size: ${fontSizes.small}px;
  color: ${colors.lightGray};
  font-weight: bold;
  margin-bottom: 8px;
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NumberInput = styled.input`
  padding: 4px 0px;
  font-size: ${fontSizes.medium}px;
  font-weight: bold;
  box-shadow: 0px 0px 20px 0px black;
  text-align: center;
  margin: auto 12px;
  border: none;
`;

const Button = styled.button`
  border: 1px solid ${colors.lightGray};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: ${colors.lightGray};
  cursor: pointer;
  background: none;
  outline: none;
  font: 22px sans-seriff;
  &:hover {
    color: white;
    border-color: white;
  }
  &:active#increment {
    color: ${colors.seaGreen};
    border: 2px solid ${colors.seaGreen};
  }
  &:active#decrement {
    color: red;
    border: 2px solid red;
  }
`;

const Controls = ({ quantity, setQuantity }) => {
  function onChange(e) {
    // if input is NaN, do nothing
    if (Number.isNaN(Number(e.nativeEvent.data))) return;
    setQuantity(Number(e.target.value));
  }

  // autosize input field
  const inputSize =
    String(quantity).length < 4 ? 1 : String(quantity).length - 2;

  return (
    <Container data-test="containerControls">
      <Label># OF UNITS</Label>
      <Inputs>
        <Button
          id="decrement"
          data-test="minus"
          onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : null)}
        >
          -
        </Button>
        <NumberInput
          data-test="input"
          type="text"
          value={quantity}
          onChange={onChange}
          size={inputSize}
        />
        <Button
          id="increment"
          data-test="plus"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </Button>
      </Inputs>
    </Container>
  );
};

export default Controls;
