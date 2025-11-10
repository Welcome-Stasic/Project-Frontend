import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import  ArrowLeft  from '../assets/ArrowLeft.png'
const HeadPageCreateWrapper = styled.div`
    margin-top: 56px;
    display: flex;
    width: 100%;
    justify-content: center;
    position: relative;
    color: white;
    font-size: 25px;
`;
const CircleLinkBack = styled.div`
   position: absolute;
   left: 0px;
`;
interface TaskFormHeaderProps {
    mode: 'create' | 'edit';
    Title?: string;
}

const HeadCreatePage = ({ mode, Title }: TaskFormHeaderProps) => {
    
    return (
        <>
        <HeadPageCreateWrapper>
            <Link to={'/'}>
                <CircleLinkBack><img src={ArrowLeft}/></CircleLinkBack>
            </Link>
            {mode === 'create' ? 'Create Task' : `${Title}`}
        </HeadPageCreateWrapper>
        </>
    )
};
export default HeadCreatePage;
