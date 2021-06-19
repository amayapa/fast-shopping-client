import styled from "styled-components";
import { Theme } from "./globalStyles";

export const Button = styled.button`
  padding: 5px;
  padding-inline: 10px;
  font-weight: bold;
  color: ${(props) =>
    props.disabled
      ? Theme[props.mode].colors.disable
      : Theme[props.mode].colors.text};
  border: solid 2px;
  border-color: ${(props) =>
    props.disabled
      ? Theme[props.mode].colors.disable
      : Theme[props.mode].colors.borderColor};
  border-radius: ${(props) => Theme[props.border].borderRadius};
  background-color: ${(props) => Theme[props.mode].colors.bgPrimary};
  box-shadow: ${(props) =>
    props.disabled
      ? Theme[props.mode].colors.disabledShadow
      : Theme[props.mode].colors.shadows};
  outline: none;
  cursor: ${(props) => (props.disabled ? "initial" : "pointer")};
  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? Theme[props.mode].colors.bgPrimary
        : Theme[props.mode]?.colors.hover};
  }
`;
