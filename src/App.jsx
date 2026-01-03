import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header/>
    <Nav/>

    <Outlet/>
    
    <Footer/>
    </>
  )
}

export default App