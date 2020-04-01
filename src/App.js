import React from "react";
import Counter from "./Components/Counter";
import styled from "@emotion/styled";
import { colors } from "./config";

const Background = styled.div`
  width: calc(100vw - 16px);
  height: calc(100vh - 16px);
  background: ${colors.lightTeal};
  display: flex;
  justify-items: center;
  align-content: center;
  font-family: "Open Sans", sans-serif;
`;

const App = () => {
  return (
    <Background data-test="background">
      <Counter />
    </Background>
  );
};

export default App;
