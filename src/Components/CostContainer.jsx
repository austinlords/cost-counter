import React from "react";
import styled from "@emotion/styled";
import { fontSizes, colors } from "../config";

const Container = styled.div`
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: bold;
  background: ${({ bg }) => bg};
`;

const Label = styled.div`
  font-size: ${fontSizes.small}px;
  color: ${colors.darkGray};
`;

const Display = styled.div`
  font-size: ${fontSizes.large}px;
  color: white;
`;

const CostContainer = ({ bg, label, display }) => {
  return (
    <Container bg={bg}>
      <Label>{label}</Label>
      <Display>{display}</Display>
    </Container>
  );
};

export default CostContainer;
