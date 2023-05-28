import { FC } from "react"
import { Outlet } from 'react-router-dom'
import './App.css';
import NavBar from './View/Components/NavBar';

const App: FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App;
