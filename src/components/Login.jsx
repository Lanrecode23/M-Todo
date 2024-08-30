import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')    

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }

  return (
    <div>
      <h2>Login</h2>
      <form action="" >
      <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder='Username'/>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
      <button type='submit' onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default Login
