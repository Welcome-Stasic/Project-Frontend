import styled from '@emotion/styled';
import { useStore } from '../stores/StoreContext';

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
const ProgressBarContainer = styled.div`
    padding: 14px;
    width: 100%;
    background-color: #181818;
    border-radius: 8px;
`
const ProgressBarBack = styled.div`
    background-color: #BA83DE69;
    box-shadow: 1px 4px 6px 0px #00000040 inset;
    width: 100%;
    border-radius: 10px;
    height: 18px;
`
const ProgressBarFront = styled.div`
    background-color: #BA83DE;
    box-shadow: 1px 4px 6px 0px #00000040 inset;
    border-radius: 10px;
    height: 18px;
    transition: 0.5s;
`

export default () => {
  const store = useStore();
  return (
    <>
    <div className="container">
    <ProgressTitle>Progress <LinkTaskAll href="#">See All</LinkTaskAll></ProgressTitle>
    <ProgressBarContainer>
        <div className="md-text">
            Tasks for today
        </div>
        <div style={{
                color: '#FFFFFFCC',
                fontSize: '16px',
                marginBottom: '10px'
            }}>
            {store.todayProgress.completed}/{store.todayProgress.total} task completed
            </div>
            <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: '#FFFFFFCC',
                fontSize: '14px',
                marginBottom: '10px'
            }}
            ><div>You are almost done go ahead</div>
            <div style={{
                color: 'white',
                fontSize: '18px',
            }}>{store.todayProgress.procent}%</div>
            </div>
        <ProgressBarBack>
            <ProgressBarFront style={{ width: `${store.todayProgress.procent}%` }}></ProgressBarFront>
        </ProgressBarBack>
    </ProgressBarContainer>
    </div>
    </>
  ); 
};