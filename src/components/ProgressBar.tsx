import styled from '@emotion/styled';

const ProgressTitle = styled.div`
    margin-top: 30px;
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
  return (
    <>
    <div className="container">
    <ProgressTitle>Progress <LinkTaskAll href="#">See All</LinkTaskAll></ProgressTitle>
    </div>
    </>
  ); 
};