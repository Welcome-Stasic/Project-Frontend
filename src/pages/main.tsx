import { useState } from 'react'
import Header from '../components/header'
import SearchBar from '../components/searchbar'
import ProgressBar from '../components/ProgressBar'
import DashBoardTasks from '../components/DashBoardTasks'

export default () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
    <Header/>
     <SearchBar
     value={searchValue} 
     onChange={setSearchValue}
     />
     <ProgressBar/>
     <DashBoardTasks/>
    </>
  ); 
};