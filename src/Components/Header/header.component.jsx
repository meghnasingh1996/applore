import React from 'react';
import './header.styles.scss';

import  {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div className="app-header">
        <Link className='option' to='/'>HOME</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        <Link className='option' to='/login'>SIGN IN</Link>
        </div>
    )
}

export default Header;