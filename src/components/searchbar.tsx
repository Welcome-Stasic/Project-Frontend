import styled from "@emotion/styled";
const SearchbarWrapper = styled.div`
  width: 100%;
  height: 52px;
  position: relative;
  padding-bottom: 5px;
`;
const SearchBar = styled.input`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  background-color: #1e1e1e;
  color: white;
  font-size: 16px;
  padding-left: 38px;
  border: none;
  outline: 2px solid #ba83de00;
  transition: 0.2s;
  &:focus {
    outline: 2px solid #ba83de;
  }
`;
const ClearBtn = styled.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 15px;
`;
interface SearchBarType {
  value: string;
  onChange: (value: string) => void;
}

export default ({ value, onChange }: SearchBarType) => {
  return (
    <>
      <SearchbarWrapper>
        <SearchBar
          type="text"
          placeholder="🔍 Search Task Here"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        ></SearchBar>
        {value && <ClearBtn onClick={() => onChange("")}>✕</ClearBtn>}
      </SearchbarWrapper>
    </>
  );
};
