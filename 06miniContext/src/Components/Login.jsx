import {useContext, useState} from 'react'
import UserContext from '../Context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext) 

    const handleSubmit =(e) =>{
        e.preventDefault()
        setUser({username, password});
    }
    return (
        <div>
            <h2>Login</h2>

            <input 
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text" 
            placeholder='username' />

            <input 
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
            type="password" 
            placeholder='password'/>
            <button onClick={handleSubmit} >Submit</button>
        </div>
    )
}

export default Login
