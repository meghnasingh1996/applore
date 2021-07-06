import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';

import Header from './Components/Header/header.component';
import Contact from './Components/Contact/contact.component';
import LoginPage from './Pages/Login/login-page.component'
import AdminLogin from './Components/Admin-Login/admin-login.component';
import UserLogin from './Components/User-Login/user-login.component';
import UserDashboard from './Components/User-dashboard/user-dasboard.component';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse : ""
    }
  }

  render(){
  return (
    <div className="App">
    <Header /> 
    <Switch>
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/login'  component={LoginPage} />
      <Route exact path='/admin-login'  component={AdminLogin} />
      <Route exact path='/user-login'  component={UserLogin} />
      <Route exact path='/user-dashboard'  component={UserDashboard} />
    </Switch>
    </div>
  );
  }
}

export default App;
