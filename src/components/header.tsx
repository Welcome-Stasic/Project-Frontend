import styled from '@emotion/styled';
import { useStore } from '../stores/StoreContext';
import { observer } from 'mobx-react-lite';

const Header = styled.header`
    margin-top: 56px;
    margin-bottom: 22px;
`;
const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const HeaderText = styled.div`
    font-weight: 600;
    font-size: 25px;
    max-width: 250px;
`;
const HeaderAvatarBox = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
`;
const DayTaskHeader = styled.div`
    position: absolute;
    bottom: 0px;
    right: 0px;
    padding: 2px 5px;
    border-radius: 15px;
    color: white;
    font-size: 9px;
    background-color: #FF763B;
`;
const HeaderAvatar = styled.div`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    background-color: #BA83DE;
`;
const HeaderComponent = observer( () => {
  const store = useStore();
  return (
    <>
    <Header>
        <HeaderContent>
        <HeaderText>
          { store.todayTasksComplete.length > 0 ?
           <>
           You have got {store.todayTasksComplete.length} tasks today to complete✏️
           </> :
           <>
           All tasks completed for today👌
           </>
          }
        </HeaderText>
        <HeaderAvatarBox>
          <HeaderAvatar></HeaderAvatar>
          { store.todayTasksComplete.length > 0 && (
          <DayTaskHeader>
            {store.todayTasksComplete.length}
          </DayTaskHeader>
          )}
        </HeaderAvatarBox>
        </HeaderContent>
    </Header>
    </>
  ); 
});
export default HeaderComponent;