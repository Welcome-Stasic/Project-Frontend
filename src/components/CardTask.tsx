import styled from '@emotion/styled';

type Priority = 'low' | 'medium' | 'high';

interface CardMarkProps {
  priority: Priority;
}
interface TaskCardProps {
  priority: Priority;
  title: string;
  date: string;
}
const CardWrapper = styled.div`
    margin-bottom: 10px;
    background-color: #1F1F1F;
    border-radius: 8px;
    padding: 20px 11px 20px 30px;
    position: relative;
    display: flex;
    justify-content: space-between;
`
const CardMark = styled.div<CardMarkProps>`
    background-color: ${props => {
        switch (props.priority) {
            case 'high':
                return '#FACBBA';
            case 'medium':
                return '#FAD9FF';
            case 'low':
                return '#D7F0FF';
        }
    }};
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 15px;
    border-radius: 8px 0px 0px 8px;
`
export default ({ priority, title, date }: TaskCardProps) => {
    
  return (
    <>
        <CardWrapper>
            <CardMark priority={priority}/>
            <div>
                {title}<br/>
                <div>📅 {date}</div>
            </div>
            <input type="checkbox"/>
        </CardWrapper>
    </>
  ); 
};