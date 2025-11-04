import styled from '@emotion/styled';


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
interface HeaderType {
  TaskDay: number;
};
export default ({TaskDay} : HeaderType) => {
  return (
    <>
    <Header>
      <div className="container">
        <HeaderContent>
        <HeaderText>
          You have got {TaskDay} tasks today to complete
        </HeaderText>
        <HeaderAvatarBox>
          <HeaderAvatar></HeaderAvatar>
          <DayTaskHeader>
            {TaskDay}
          </DayTaskHeader>
        </HeaderAvatarBox>
        </HeaderContent>
        </div>
    </Header>
    </>
  ); 
};