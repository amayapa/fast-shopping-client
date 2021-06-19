import styled from "styled-components";
import { footerHg, device, Theme } from "./globalStyles";

export const FooTer = styled.div`
  display: flex;
  margin: 0px;
  width: 100%;
  height: ${footerHg};
  min-height: 50px;
  align-items: center;
  justify-content: center;
  color: ${(props) => Theme[props.mode]?.colors.text};
  @media ${device.mobileL} {
    justify-content: flex-start;
  }
  @media ${device.mobileS} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
