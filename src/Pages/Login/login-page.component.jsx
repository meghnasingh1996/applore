import React from 'react';
import './login-page.styles.scss';

// Importing card from material-ui
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

//Importing images from assets folder
import Admin  from '../../assets/avatar-admin.png';
import User from '../../assets/user.png';

import { useHistory } from 'react-router-dom';


const LoginPage = () =>{
    const history = useHistory();
        return(
            <div className="login-page">
                <Card  className="card-class">
                    <CardContent className='content-class'>
                        <img alt="" src={Admin} />
                    </CardContent>
                    <CardActions className='action-class'>
                        <Button onClick={() => history.push('/admin-login')}>Admin Login</Button>
                    </CardActions>
                </Card>
                <Card  className="card-class">
                <CardContent className='content-class'>
                    <img alt='' src={User}/>
                </CardContent>
                <CardActions className='action-class'>
                    <Button onClick={() => history.push('/user-login')}>User Login</Button>
                </CardActions>
            </Card>
            </div>
        )
    }

export default LoginPage;