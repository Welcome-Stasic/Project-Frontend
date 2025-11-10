import styled from '@emotion/styled';
import { useStore } from '../stores/StoreContext';
import CardTask from './CardTask';
import { observer } from 'mobx-react-lite';
import CircleLinkCreateTask from '../components/CreateTaskLink';




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

const Dashboard = observer(() => {
  const store = useStore();
  const tasksToday = store.todayTasks;
  const tasksTommorow = store.tomorrowTasks;

  const handleToggleTask = (taskId: string) => {
    store.toggleTask(taskId);
  };
  return (
    <>
        <ProgressTitle>Today’s Task <LinkTaskAll href="#">See All</LinkTaskAll></ProgressTitle>
        {tasksToday.map(item =>
          <CardTask key={item.id} id={item.id} priority={item.priority} title={item.title} date={item.date} checked={item.completed} onToggle={handleToggleTask} />
        )}
        <ProgressTitle>Tommorrow Task <LinkTaskAll href="#">See All</LinkTaskAll></ProgressTitle>
        {tasksTommorow.map(item =>
          <CardTask key={item.id} id={item.id} priority={item.priority} title={item.title} date={item.date} checked={item.completed} onToggle={handleToggleTask} />
        )}
        <CircleLinkCreateTask />
    </>
  );
});
export default Dashboard;