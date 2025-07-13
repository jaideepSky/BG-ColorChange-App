import { useState } from 'react'
import './App.css'
import UserContext from './context/UserContext'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {
  return (

     <UserContextProvider>
      <h1>Hello ji</h1>
      <Login/>
      <Profile/>
     </UserContextProvider>
   
  )
}

export default App
