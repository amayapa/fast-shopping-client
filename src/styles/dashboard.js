import styled from "styled-components";
import { device } from "./globalStyles";

const Dashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-inline: 30px;
  padding-block: 30px;
  @media ${device.mobileM} {
    padding: 10px;
  }
`;

export default Dashboard;
