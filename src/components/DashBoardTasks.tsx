import styled from "@emotion/styled";
import { useStore } from "../stores/StoreContext";
import CardTask from "./CardTask";
import { observer } from "mobx-react-lite";
import CircleLinkCreateTask from "../components/CreateTaskLink";
import SearchBar from "../components/searchbar";
import ProgressBar from "../components/ProgressBar";

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
  color: #ba83de;
  text-decoration: none;
  font-size: 16px;
`;
const ScrollWrapper = styled.div`
  overflow-y: scroll;
  max-height: calc(100dvh - 200px);
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Dashboard = observer(() => {
  const store = useStore();
  const { today, tomorrow, future } = store.groupedTasks;
  const searchTextQuery = store.searchText;

  const handleToggleTask = (taskId: string) => {
    store.toggleTask(taskId);
  };

  const searchChange = (value: string) => {
    store.searchTextFilter(value);
  };

  return (
    <>
      <SearchBar value={searchTextQuery} onChange={searchChange} />
      <ScrollWrapper>
        <ProgressBar />
        {searchTextQuery ? (
          <>
            <ProgressTitle>Result: {store.filterTasks.length}</ProgressTitle>
            {store.filterTasks.map((item) => (
              <CardTask
                key={item.id}
                id={item.id}
                priority={item.priority}
                title={item.title}
                date={item.dueDate}
                checked={item.completed}
                onToggle={handleToggleTask}
              />
            ))}
          </>
        ) : (
          <>
            {today.length > 0 && (
              <>
                <ProgressTitle>
                  Today's Task <LinkTaskAll href="#">See All</LinkTaskAll>
                </ProgressTitle>
                {today.map((item) => (
                  <CardTask
                    key={item.id}
                    id={item.id}
                    priority={item.priority}
                    title={item.title}
                    date={item.dueDate}
                    checked={item.completed}
                    onToggle={handleToggleTask}
                  />
                ))}
              </>
            )}
            {tomorrow.length > 0 && (
              <>
                <ProgressTitle>
                  Tomorrow Task <LinkTaskAll href="#">See All</LinkTaskAll>
                </ProgressTitle>
                {tomorrow.map((item) => (
                  <CardTask
                    key={item.id}
                    id={item.id}
                    priority={item.priority}
                    title={item.title}
                    date={item.dueDate}
                    checked={item.completed}
                    onToggle={handleToggleTask}
                  />
                ))}
              </>
            )}
            {future.length > 0 && (
              <>
                <ProgressTitle>
                  Future Tasks <LinkTaskAll href="#">See All</LinkTaskAll>
                </ProgressTitle>
                {future.map((item) => (
                  <CardTask
                    key={item.id}
                    id={item.id}
                    priority={item.priority}
                    title={item.title}
                    date={item.dueDate}
                    checked={item.completed}
                    onToggle={handleToggleTask}
                  />
                ))}
              </>
            )}

            <CircleLinkCreateTask />
          </>
        )}
      </ScrollWrapper>
    </>
  );
});

export default Dashboard;
