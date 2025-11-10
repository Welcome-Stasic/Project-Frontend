import MainPage from './pages/main'
import CreatePage from './pages/CreateTask'
import './App.css';
import { StoreProvider } from './stores/StoreContext';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <StoreProvider>
        <Routes>
          <Route path="/edit/:taskId" element={<CreatePage />} />
          <Route path='/' element={<MainPage />}>
          </Route>
          <Route path='/createTask' element={<CreatePage />}>
          </Route>
        </Routes>
      </StoreProvider>
    </>
  )
}

export default App
