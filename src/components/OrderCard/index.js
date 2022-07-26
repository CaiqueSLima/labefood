import React from "react";
import { Container, ContainerData, Name, Price } from "./styles";

function OrderCard(props) {
  return (
    <Container>
      <Name>{props.name}</Name>
      <ContainerData>
        <p>{props.expiresAt}</p>
      </ContainerData>
      <Price>SUBTOTAL R${props.totalPrice}</Price>
    </Container>
  );
}

export default OrderCard;
