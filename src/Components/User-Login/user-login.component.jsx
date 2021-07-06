import React  , {useState} from 'react';
import './user-login.styles.scss';

import { FormControl }from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios';

const UserLogin = (props) => {

const handleLogin = () => {
    axios.post("http://localhost:4000/api/admin-login" , {
        email: email,
        password: password
    }).then(response => {
        props.history.push('/user-dashboard');
    }).catch(err => {
        console.log("error is" , err);
    });
}

    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');

    return(
        <div className="user-login">
           <h2>Login for User</h2>
           <div>
             <FormControl className='user-control'>
           <Input  
                type="text" 
                name="email"
                placeholder="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                />
            </FormControl>
            <FormControl className='user-control'>
            <Input 
                type="password" 
                placeholder="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                />
            </FormControl>
            <Button type="submit" value="login" onClick={handleLogin}>Login</Button>
            </div>
            </div>
    )
}


export default UserLogin;