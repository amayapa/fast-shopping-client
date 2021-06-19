import styled from "styled-components";
import { device, Theme } from "./globalStyles";

const CardComponent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 250px;
  padding: 15px;
  padding-right: 25px;
  padding-left: 25px;
  margin: 20px;
  border: solid 3px;
  background-color: ${(props) => Theme[props.mode]?.colors.bgSecondary};
  border-radius: ${(props) => Theme[props.border].borderRadius};
  border-color: ${(props) => Theme[props.mode]?.colors.borderColor};
  @media ${device.mobileL} {
    transform: scale(0.9);
  }
  @media ${device.mobileM} {
    transform: scale(0.8);
  }
  @media ${device.mobileS} {
    transform: scale(0.7);
  }
`;
const Title = styled.h2`
  margin: 0;
`;
export const SubTitle = styled.h5`
  margin: 0;
  margin-top: 5px;
  margin-bottom: 10px;
`;
const Description = styled.div`
  height: 100%;
  overflow-y: auto;
  margin-bottom: 10px;
  & p {
    text-align: start;
    font-weight: 500;
    margin-top: 0;
    padding-right: 5px;
    line-height: 20px;
  }
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Price = styled.h3`
  display: inline;
  margin: 0;
  &::before {
    content: "$";
  }
  font-size: large;
`;

export { CardComponent, Title, Description, CardFooter, Price };
