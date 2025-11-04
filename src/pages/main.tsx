import { useState, useReducer } from 'react'
import Header from '../components/header'
import SearchBar from '../components/searchbar'

export default () => {
  const [searchValue, setSearchValue] = useState('');
  // const [state, dispatch] = useReducer(reducer, initialState);

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case 'increment':
  //       return { count: state.count + 1 };
  //     case 'decrement':
  //       return { count: state.count - 1 };
  //     default:
  //       return {};
  //   }
  // }
  return (
    <>
    
    <Header TaskDay={9}/>
     <SearchBar
     value={searchValue} 
     onChange={setSearchValue}
     />
    </>
  ); 
};