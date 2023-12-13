import { useState } from 'react'
import './App.css'
import SignupForm from './components/signupform'
import Authenticate from './components/authenticate'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <SignupForm setToken={setToken} token={token} /> 
      <Authenticate setToken={setToken} token={token} />
    </>
  )
}

export default App
