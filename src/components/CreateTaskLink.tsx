import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const CircleLink = styled.div`
  width: 71px;
  height: 71px;
  border-radius: 50%;
  background: linear-gradient(340.24deg, #de83b0 -39.46%, #c59adf 94.22%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CircleWrapper = styled.div`
  position: fixed;
  z-index: 101;
  top: 85dvh;
  right: calc(50% - min(500px, 100vw - 40px) / 2 + 10px);
`;
const CircleLinkVLine = styled.div`
  position: absolute;
  z-index: 31;
  left: calc(50% - 2px);
  width: 2px;
  border-radius: 2px;
  height: 24px;
  background-color: #292d32;
`;
const CircleLinkHLine = styled.div`
  position: absolute;
  width: 24px;
  left: calc(50% - 12px);
  top: calc(50% - 1px);
  border-radius: 2px;
  height: 2px;
  background-color: #292d32;
`;

const CircleLinkCreateTask = () => {
  return (
    <>
      <CircleWrapper>
        <Link to={"/createTask"}>
          <CircleLink>
            <CircleLinkVLine></CircleLinkVLine>
            <CircleLinkHLine></CircleLinkHLine>
          </CircleLink>
        </Link>
      </CircleWrapper>
    </>
  );
};
export default CircleLinkCreateTask;
