import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../assets/ArrowLeft.png";
const HeadPageCreateWrapper = styled.div`
  padding-left: 30px;
  margin-top: 56px;
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
  color: white;
  font-size: 25px;
  text-align: center;
`;
const CircleLinkBack = styled.div`
  position: absolute;
  left: 0px;
`;
interface TaskFormHeaderProps {
  mode: "create" | "edit";
  Title?: string;
}

const HeadCreatePage = ({ mode, Title }: TaskFormHeaderProps) => {
  const navigate = useNavigate();
  return (
    <>
      <HeadPageCreateWrapper>
        <CircleLinkBack
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={ArrowLeft} />
        </CircleLinkBack>
        {mode === "create" ? "Create Task" : `${Title}`}
      </HeadPageCreateWrapper>
    </>
  );
};
export default HeadCreatePage;
