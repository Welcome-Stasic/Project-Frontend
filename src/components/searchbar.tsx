import styled from '@emotion/styled';

const SearchBar = styled.input`
    width: 100%;
    height: 52px;
    border-radius: 8px;
    background-color: #1E1E1E;
    color: white;
    font-size: 16px;
    padding-left: 38px;
    border: none;
    outline: 2px solid #ba83de00;
    transition: 0.2s;
    &:focus {
        outline: 2px solid #BA83DE;
    }
`;
interface SearchBarType {
  value: string;
  onChange: (value: string) => void;
};

export default ({ value, onChange }: SearchBarType) => {
  return (
    <>
        <SearchBar
          type="text"
          placeholder="🔍 Search Task Here"
          value={value}
          onChange={(e) => onChange(e.target.value)}>
        </SearchBar>
    </>
  );
};