import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import ProtectedRoutes from './Services/ProtectedRoutes.jsx'
import App from './App.jsx'
import './index.css'

const App1 = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={ <ProtectedRoutes /> } >
            <Route path='/' element={<App />} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App1
