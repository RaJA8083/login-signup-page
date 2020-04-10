import React,{useState} from 'react';
import {Jumbotron,Button,Form,FormGroup,Label,Input} from 'reactstrap';
import {Link,Redirect} from 'react-router-dom'
//import './App.css';
//import Design from './component/design'
const Login = (props) => {
    const [Email,setEmail]=useState('')
    const [Password, setPassword]= useState('')
    const [user, setUser] = useState('');
    const [submitted, setsubmitted]=useState(false)

    const handleSubmit=(e)=>{
        console.log("handle")
        e.preventDefault()
        let data={email:Email,password:Password}
        let url = "https://sparkling-silence-8799.getsandbox.com/user/login"
        fetch(url, {
            method: "POST",
            headers: {
                "access-control-allow-origin": "*",
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
            },
            body:JSON.stringify(data),
        })
        .then((response)=>response.json())
        .then((res)=> setUser(res.username))
        .catch((error)=>console.log("error",error))
    }

    if( user && user != '')
    {
        return(
        <Redirect to={'/profile/'+ user} /> 
        )
    }
    return ( 
        <div className="Login">
            < h1 > Basic Login System with react and bootstrap </h1>
            <Jumbotron className="mx-auto">
                <h1>Login Form</h1>


        <Form onSubmit={handleSubmit}>
            <FormGroup>
                < Label for = "exampleEmail" >Email</Label> 
                <Input type = "email" name = "Email"id = "exampleEmail"placeholder = "Email" value = {Email} onChange = {(e) => setEmail(e.target.value)}/> 
            </FormGroup>
            <FormGroup>
        <Label for = "examplePassword">Password </Label> 
        <Input type = "password" name = "Password" id = "examplePassword"placeholder = "Password" value={Password} onChange ={(e) =>setPassword(e.target.value)}/>
        </FormGroup>
        <Button type="button" className="btn btn-success" onClick={handleSubmit} >Login</Button>
        </Form>
        </Jumbotron>
        </div>
    )
}

export default Login 