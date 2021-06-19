import styled from "styled-components";
import { device, Theme } from "./globalStyles";

const Cart = styled.div`
  padding-inline: 50px;
  padding-top: 20px;
  padding-bottom: 40px;
  color: ${(props) => Theme[props.mode]?.colors.text};
  @media ${device.mobileM} {
    padding: 20px;
  }
`;
export const Title = styled.h2`
  letter-spacing: 0.8px;
`;
export const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  & h2 {
    margin: 0;
    margin-right: 3px;
  }
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  & a {
    color: #235e9e;
    font-weight: 500;
    margin-left: 20px;
  }
`;

export default Cart;
