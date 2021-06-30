import styled from "styled-components";
import { device } from "./globalStyles";

const Dashboard = styled.div`
  padding-bottom: 10px;
  @media ${device.mobileM} {
    padding: 10px;
  }
`;
export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-inline: 30px;
`;

export default Dashboard;
