import styled from "styled-components";
import { device, Theme } from "./globalStyles";

export const FormWrapper = styled.div`
  margin: 20px;
  margin-inline: 0;
  display: flex;
`;

export const Form = styled.div`
  padding: 15px;
  border: solid 3px;
  border-color: ${(props) => Theme[props.mode]?.colors.borderColor};
  border-radius: ${(props) => Theme[props.border].borderRadius};
  background-color: ${(props) => Theme[props.mode]?.colors.bgSecondary};
  padding-right: 55px;
  flex-grow: 1;
  @media ${`(max-width: 500px)`} {
    padding: 20px;
  }
`;

export const FormTitle = styled.h4`
  font-weight: bold;
  text-align: left;
  margin-left: calc(25% + 25px);
  @media ${`(max-width: 500px)`} {
    margin: 0 0 10px 0;
    text-align: center;
  }
`;
export const FormRow = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media ${`(max-width: 500px)`} {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  width: 25%;
  font-weight: bold;
  font-size: 14px;
  text-align: right;
  margin-right: 25px;
  @media ${`(max-width: 500px)`} {
    margin-right: 0;
    text-align: left;
    width: 100%;
  }
`;

export const Input = styled.input`
  outline: none;
  border: solid 2px;
  padding: 5px;
  padding-left: 10px;
  color: ${(props) => Theme[props.mode]?.colors.text};
  border-color: ${(props) => Theme[props.mode]?.colors.borderColor};
  background-color: ${(props) => Theme[props.mode]?.colors.bgPrimary};
  border-radius: ${(props) => Theme[props.border].borderRadius};
  text-align: left;
  line-height: 22px;
  width: 75%;
  @media ${`(max-width: 500px)`} {
    width: 100%;
  }
`;
export const TextArea = styled.textarea`
  outline: none;
  padding: 10px;
  color: ${(props) => Theme[props.mode]?.colors.text};
  width: 75%;
  min-height: 28px;
  border: solid 2px black;
  border-color: ${(props) => Theme[props.mode]?.colors.borderColor};
  background-color: ${(props) => Theme[props.mode]?.colors.bgPrimary};
  border-radius: ${(props) => Theme[props.border].borderRadius};
  resize: vertical;
  @media ${`(max-width: 500px)`} {
    width: 100%;
  }
`;

export const Blank = styled.div`
  flex-grow: 5;
  @media ${device.tablet} {
    display: none;
  }
`;
