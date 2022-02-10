import React, {useState} from 'react'

const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = () => {
        const config = {
            "method":"POST",
            "headers":{
               "Content-Type":"application/json" 
            },
            "body":JSON.stringify({
                username,
                password
            })
        }
        fetch("/register",config)
    }
  return (
    <div>
        <label htmlFor='username'>
            Username:
        </label>
        <input 
            onChange={(e) => {
                setUsername(e.target.value)
            }}
            type="text"
            placeholder='username'
            name='username'
        />
        <label htmlFor='password'>
            Password:
        </label>
        <input 
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            type="password"
            placeholder='password'
            name='password'
        />
        <input 
            onClick={handleSubmit}
            type="submit"
            value={isLoggedIn ? 'Logout' : 'Login/Register'}
        />
    </div>
  )
}

export default Login