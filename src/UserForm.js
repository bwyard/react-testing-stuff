import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap'

function UserForm(){
    const [email,setEmail] =useState("")
    const [password,setPassword] = useState("")
    return(
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                    onChange={event => setEmail(event.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    onChange={event=>setPassword(event.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            Email entered:{email}
            <br />
            Password entered: {password}
        </div>
    )
}
export default UserForm;