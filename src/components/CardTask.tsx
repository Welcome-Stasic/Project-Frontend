import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import { useStore } from '../stores/StoreContext';
import { observer } from 'mobx-react-lite';

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
  showFullDate?: boolean;
}

const CardWrapper = styled.div<CheckedTask>`
    opacity: ${p => {
        switch(p.checked) {
            case true:
                return '50%';
            case false: 
                return '100%';
        }
    }};
    text-decoration: ${p => {
        switch(p.checked) {
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
    background-color: ${p => {
        switch (p.priority) {
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

const CardTask = observer(({id, priority, title, date, checked, onToggle, showFullDate = false }: TaskCardProps) => {
    const store = useStore();
    
    const handleCheckboxChange = (e: React.MouseEvent) => {
        e.stopPropagation();
        onToggle(id);
    };

    const displayDate = store.getDisplayDate(date);

    return (
      <Link to={`/edit/${id}`} style={{ textDecoration: 'none', color:'white' }}>
          <CardWrapper checked={checked}>
              <CardMark priority={priority}/>
              <div>
                  {title}<br/>
                  <div>📅 {showFullDate ? displayDate : displayDate}</div>
              </div>
              <input type="checkbox" checked={checked} onClick={handleCheckboxChange}/>
          </CardWrapper>
      </Link>
    );
});

export default CardTask;