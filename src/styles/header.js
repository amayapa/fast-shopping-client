import { device, navBarHg, Theme } from "./globalStyles";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  position: sticky;
  justify-content: space-between;
  padding-inline: 65px;
  height: ${navBarHg};
  align-items: center;
  color: ${(props) => Theme[props.mode]?.colors.text};
  @media ${device.tablet} {
    justify-content: space-evenly;
    padding: 10px;
  }
  @media ${device.tablet} {
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    height: 200px;
  }
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  & h1 {
    margin-left: 0.5em;
    letter-spacing: 1px;
  }
`;
export const Divider = styled.hr`
  background-color: ${(props) => Theme[props.mode]?.colors.borderColor};
  color: ${(props) => Theme[props.mode]?.colors.borderColor};
  height: 3px;
  margin-inline: 50px;
  margin-block: 0;
`;

export default Header;
