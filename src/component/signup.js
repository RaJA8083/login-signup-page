import React,{useState} from 'react'
import {BrowserHistory, Redirect,Link}from 'react-router-dom'
import {Col,Row,Button,Form,FormGroup,Label,Input,Jumbotron} from 'reactstrap'
const SignUp=()=>{
    const [FirstName,setFirstName]=useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Address, setAddress] = useState('')
    const [Address2, setAddress2] = useState('')
    const [City, setCity] = useState('')
    const [State, setState] = useState('')
    const [Pin, setPin] = useState('')
    const [Checkbox, setCheckbox] = useState(false)
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit =(e)=> {
        e.preventDefault();
        let data = {email:Email,username:FirstName,password: Password}
        let url = "https://sparkling-silence-8799.getsandbox.com/user/signup"
        fetch(url,{
            method: "POST",
            headers: {
               "access-control-allow-origin": "*",
               "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
            },
            body:JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((response)=> setSubmitted(true))
        //.then((response)=>localStorage.setItem("USER",JSON.stringify(response)));
        .catch((error)=> console.log("error", error));
        
    }

    if(submitted){
        return (
            <Redirect  to="/login"/>
          /*  <div>
                <Jumbotron>
            <h1>You have Registered sucessfully</h1>
            <Link to='/login' className="btn btn-primary">Login</Link>
       </Jumbotron>
        </div>*/
        )
    }

    return(
        <div className="Login">
            <Jumbotron className="Jumbotron">
                <h1>SignUp</h1>
         <Form onSubmit={handleSubmit}>
             <Row form>
             <Col md = {6}>
             <FormGroup>
             <Label for="exampleFirstName" > First Name </Label>
          <Input type = "text" name = "FirstName" id = "exampleFirstName" placeholder = "Ravi" value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
             </FormGroup>
              </Col> 
             <Col md = {6}>
             <FormGroup >
             <Label for = "exampleLastName" > LastName </Label> 
         <Input type = "text" name = "LastName" id = "exampleLastName"placeholder = "Ranjan" value={LastName} onChange={(e) => setLastName(e.target.value)}/>
             </FormGroup> 
             </Col>
              </Row> 
              < Row form >
                  <Col md = {6} >
                  <FormGroup >
                  <Label for = "exampleEmail" > Email </Label> 
              <Input type = "email"name = "Email"id = "exampleEmail"placeholder = "enter email" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                  </FormGroup> 
                  </Col>  
                  <Col md = {6} >
                  <FormGroup >
                  <Label for = "examplePassword" > Password </Label>  
              <Input type = "password" name = "Password" id = "examplePassword"placeholder = "enter password" value={Password} onChange={(e) => setPassword(e.target.value)}/>
                  </FormGroup> 
                  </Col>
                  </Row>
             <FormGroup >
             <Label for = "exampleAddress" > Address </Label>
          <Input type = "text"name = "address"id = "exampleAddress"placeholder = "1234 Main St" value={Address} onChange={(e) => setAddress(e.target.value)}/>
             </FormGroup> 
             <FormGroup >
             <Label for = "exampleAddress2" > Address2 </Label> 
         <Input type = "text" name = "address2"id = "exampleAddress2"placeholder = "Apartment, studio, or floor" value={Address2} onChange={(e) => setAddress2(e.target.value)}/>
             </FormGroup> 
             <Row form >
             <Col md = {6} >
             <FormGroup >
             <Label for = "exampleCity" > City </Label>
            <Input type = "text" name = "city"id = "exampleCity" value={City} onChange={(e) => setCity(e.target.value)}/>
             </FormGroup>
              </Col> 
             <Col md = {4} >
             <FormGroup >
             <Label for = "exampleState" > State </Label> 
         <Input type = "text" name = "state" id = "exampleState" value={State} onChange={(e) => setState(e.target.value)}/>
             </FormGroup> 
             </Col> 
             <Col md = {2} >
             <FormGroup >
             <Label for = "exampleZip" > Pin </Label> 
         <Input type = "text" name = "zip" id = "exampleZip" value={Pin} onChange={(e) => setPin(e.target.value)}/>
             </FormGroup>  
              </Col> 
             </Row> 
             <FormGroup check>
             <Input type = "checkbox"name = "check" id = "exampleCheck" value={Checkbox} onChange={(e) => setCheckbox(e.target.value)}/>
             <Label for = "exampleCheck"check > Check me out </Label> 
             </FormGroup> 
             <Button type="button" className="btn btn-success"onClick={handleSubmit}> Sign up </Button> 
             </Form>
             </Jumbotron>
             </div>
    )
}
export default SignUp