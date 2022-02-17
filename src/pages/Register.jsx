import React, { useState } from 'react'
import showPwdImg from '../assets/Images/visibility.png';
import hidePwdImg from '../assets/Images/visibility-off.png';
import { Container, Form, FormTitle, InputContainer, Input, Link, Button, Wrapper, ImageContainer, Image } from './Login';

import Snackbar from '@mui/material/Snackbar';


const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirm, setConfirm] = useState('');
    
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [isRevealConfirmPwd, setIsRevealConfirmPwd] = useState(false);

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleClick = () => {
        setMessage("Login Successful");
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://www.kindpng.com/picc/m/757-7570984_new-haven-hardware-imac-and-iphone-mockup-mockup.png" />
                </ImageContainer>

                <Form>
                    <FormTitle>Register</FormTitle>
                
                    <InputContainer>
                        <Input placeholder = "Full Name" onChange={(e) => {setName(e.target.value)}}/>
                    </InputContainer>
                
                    <InputContainer>
                        <Input placeholder = "Username" onChange={(e) => {setUsername(e.target.value)}} />
                    </InputContainer>
                
                    <InputContainer>
                        <Input placeholder = "Email" onChange={(e) => {setEmail(e.target.value)}} />
                    </InputContainer>
                
                    <InputContainer>
                        <Input 
                            name="pwd"
                            placeholder="Enter Password"
                            type={isRevealPwd ? "text" : "password"}
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
                        />
                        <img
                            title={isRevealPwd ? "Hide password" : "Show password"}
                            src={ isRevealPwd ? showPwdImg : hidePwdImg}
                            alt = "visibility"
                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                            style={{width: "1.5rem", height: "1.5rem", margin: "1rem"}}
                        />
                        
                    </InputContainer>

                    <InputContainer>
                        <Input 
                            name="pwd"
                            placeholder="Confirm Password"
                            type={isRevealConfirmPwd ? "text" : "password"}
                            value={confirm}
                            onChange={e => setConfirm(e.target.value)}
                        />
                        <img
                            title={isRevealConfirmPwd ? "Hide password" : "Show password"}
                            src={ isRevealConfirmPwd ? showPwdImg : hidePwdImg}
                            alt = "visibility"
                            onClick={() => setIsRevealConfirmPwd(prevState => !prevState)}
                            style={{width: "1.5rem", height: "1.5rem", margin: "1rem"}}
                        />
                            
                    </InputContainer>

                    <Button onClick={handleClick}>SIGN UP</Button>

                    <Link style={{textAlign: "center"}} href="/login">Go to Login</Link>
                </Form>
            </Wrapper>
            <Snackbar
                open={open}
                onClose={handleClose}
                message={message}
            />
        </Container>
    )
}

export default Register