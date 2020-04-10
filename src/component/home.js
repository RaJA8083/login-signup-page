import React from 'react'
import {Button,Container,Row,Col,Jumbotron} from 'reactstrap'
import {Route,BrowserRouter,Switch,Link} from 'react-router-dom'
//import Changeback from './component/change_back'
const Home=()=>{
    return(
            <div className="App">
                <Jumbotron className="Jumbotron">
                    <h1>Welcome to KwickAll</h1>
        <Link to = "/login" text-align="center" className="btn btn-primary"> Login </Link>{" "}  
        <Link to = "/signup" className="btn btn-primary" > SignUp </Link>
        </Jumbotron>
       
       </div>
    )
}
export default Home