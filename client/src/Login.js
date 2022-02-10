import React from 'react'

const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = () => {
        const config = {
            "method":"POST",
            "Content-Type":"application/json",
            "body":JSON.stringify({
                username,
                password
            })
        }
        fetch("/register",config)
    }
  return (
    <div>
        <label for='username'>
            Username:
        </label>
        <input 
            type="text"
            placeholder='username'
            name='username'
        />
        <label for='password'>
            Password:
        </label>
        <input 
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