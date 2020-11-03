import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap'

function UserForm(){
    const [email,setEmail] =useState("")
    const [password,setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError,setPasswordError] =useState("")

    const handleSubmit = event => {
        event.preventDefault();
        var emailValid = false;
        var passwordValid = false
        if(email.length ===0) {
            setEmailError("email is required");
        }
        else if(email.length <6){
            setEmailError("Email should be miniminum 6 characters")
        }
        else if(email.includes(" ")){
            setEmailError("Email cannot contain spaces");
        }
        else{
            setEmailError("")
            emailValid = true
        }

        if(password.length ===0){
            setPasswordError("Password is required")
        }
        else if(password.length<8){
            setPasswordError("Password should be minimum 8 characters")
        }
        else if(password.includes(" ")){
            setPasswordError("Password cannot contain spaces")
        }

        if(emailValid && passwordValid){
            alert(`Email: ${email}\nPassword: ${password}`)
        }
    }
    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                    onChange={event => setEmail(event.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone.
                    </Form.Text>
                </Form.Group>
                {emailError.length>0&&
                <Alert variant="danger">{emailError}</Alert>}

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    onChange={event=>setPassword(event.target.value)}/>
                </Form.Group>
                {passwordError.length>0 &&
                <Alert variant='danger'>{passwordError</Alert>}
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            Email entered:{email}
            <br />
            Password entered: {password}
        </div>
    )
}
export default UserForm;