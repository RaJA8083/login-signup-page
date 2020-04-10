import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Example from './component/layout'
//import Change_back from './component/change_back'
import Login from './component/login'
import {Button} from 'reactstrap'
import SignUp from './component/signup'
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Home from './component/home'
import Profile from './component/profile'
function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Home} exact/> 
         <Route path="/login" component={Login}/>
         <Route path="/signup" component={SignUp}/>
         <Route path="/profile/:user" component={Profile}/> 
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
