import MainPage from './pages/main'
import './App.css';
import { StoreProvider } from './stores/StoreContext';



function App() {

  return (
    <>
    <StoreProvider>
        <MainPage/>
    </StoreProvider>
    </>
  )
}

export default App
