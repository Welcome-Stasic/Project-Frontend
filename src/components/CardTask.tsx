import styled from '@emotion/styled';

type Priority = 'low' | 'medium' | 'high';

interface CardMarkProps {
  priority: Priority;
}

interface CheckedTask {
  checked: boolean;
}
interface TaskCardProps {
  id: string; 
  priority: Priority;
  title: string;
  date: string;
  checked: boolean;
  onToggle: (taskId: string) => void;
}
const CardWrapper = styled.div<CheckedTask>`
    opacity: ${props => {
        switch(props.checked) {
            case true:
                return '50%';
            case false: 
                return '100%';
        }
    }};
    text-decoration: ${props => {
        switch(props.checked) {
            case true:
                return 'line-through';
            case false: 
                return 'none';
        }
    }};
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
export default ({id, priority, title, date, checked, onToggle }: TaskCardProps) => {
    const handleCheckboxChange = () => {
        onToggle(id);
    };
  return (
    <>
        <CardWrapper checked={checked}>
            <CardMark priority={priority}/>
            <div>
                {title}<br/>
                <div>📅 {date}</div>
            </div>
            <input type="checkbox" checked={checked} onChange={handleCheckboxChange}/>
        </CardWrapper>
    </>
  ); 
};