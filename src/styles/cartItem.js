import styled from "styled-components";
import { device, Theme } from "./globalStyles";

export const CardItem = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 15px;
  padding-right: 25px;
  padding-left: 25px;
  margin: 20px;
  margin-inline: 0;
  border: solid 3px;
  background-color: ${(props) => Theme[props.mode]?.colors.bgSecondary};
  border-radius: ${(props) => Theme[props.border].borderRadius};
  border-color: ${(props) => Theme[props.mode]?.colors.borderColor};
  & button {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  @media ${device.mobileM} {
    padding: 10px;
  }
`;
export const Title = styled.div`
  width: 70%;
  padding-right: 10px;
  flex-grow: 1;
  & h3 {
    font-weight: bold;
    text-align: left;
    margin: 0;
    margin-bottom: 10px;
  }
  & h5 {
    margin: 0;
    text-align: left;
    letter-spacing: 1px;
  }
  @media ${device.mobileL} {
    padding-right: 0;
  }
`;
export const SecondHalf = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: fit-content;
  width: 30%;
  flex-grow: 1;
`;
export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-evenly;
  text-align: center;
`;
export const Price = styled.p`
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize || "initial"};
  font-weight: 600;
  text-align: center;
  width: ${(props) => props.width || "initial"};
  &::before {
    content: "$";
  }
  @media ${device.mobileL} {
    font-size: 14px;
    width: fit-content;
  }
`;
export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-grow: 2;
  justify-content: space-evenly;
  & span {
    margin-bottom: 10px;
  }
`;
export const Picker = styled.select`
  flex-grow: 1;
  outline: none;
  width: 60px;
  border: solid 1px;
  padding-block: 2px;
  padding-right: 5px;
  padding-left: 5px;
  color: ${(props) => Theme[props.mode]?.colors.text};
  border-color: ${(props) => Theme[props.mode]?.colors.borderColor};
  border-radius: ${(props) => Theme[props.border].borderRadius};
  background-color: ${(props) => Theme[props.mode]?.colors.bgPrimary};
  cursor: pointer;
`;
