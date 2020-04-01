import React, { useState } from "react";
import Controls from "./Controls";
import CostContainer from "./CostContainer";
import styled from "@emotion/styled";
import { formatMoney } from "../../Utils";
import { colors } from "../config";

const Container = styled.div`
  margin: auto 40px;
  width: 100%;
  min-width: 480px;
  height: 210px;
  background: ${colors.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 160px auto 160px;
  width: 100%;
  height: 85px;
`;

const Counter = () => {
  const [costPerUnit] = useState(175.5);
  const [quantity, setQuantity] = useState(0);

  const perUnit = formatMoney(costPerUnit);
  const total = formatMoney(costPerUnit * quantity);

  return (
    <Container>
      <Row>
        <CostContainer
          label={"COST PER UNIT"}
          display={perUnit}
          bg={colors.seaGreen}
        />
        <Controls quantity={quantity} setQuantity={setQuantity} />
        <CostContainer
          label={"TOTAL COST"}
          display={total}
          bg={colors.purple}
        />
      </Row>
    </Container>
  );
};

export default Counter;
