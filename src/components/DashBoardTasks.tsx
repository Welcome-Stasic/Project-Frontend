import styled from '@emotion/styled';
import { useStore } from '../stores/StoreContext';
import CardTask from './CardTask';

const ProgressTitle = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: White;
    font-size: 22px;
`;
const LinkTaskAll = styled.a`
    color: #BA83DE;
    text-decoration: none;
    font-size: 16px;
`;

export default () => {
  const store = useStore();
  const tasksToday = store.todayTasks;
  const tasksTommorow = store.tomorrowTasks;
  return (
    <>
    <div className="container">
    <ProgressTitle>Today’s Task <LinkTaskAll href="#">See All</LinkTaskAll></ProgressTitle>
    {tasksToday.map(item => 
        <CardTask priority={item.priority} title={item.title} date={item.date}/>
    )}
    <ProgressTitle>Tommorrow Task <LinkTaskAll href="#">See All</LinkTaskAll></ProgressTitle>
    {tasksTommorow.map(item => 
        <CardTask priority={item.priority} title={item.title} date={item.date}/>
    )}
    </div>
    </>
  ); 
};