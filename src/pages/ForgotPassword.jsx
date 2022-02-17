import React, { useState } from 'react'
import { Container, Form, FormTitle, InputContainer, Input, Link, Button, Wrapper, ImageContainer, Image } from './Login';
import { useNavigate } from 'react-router-dom';

import Snackbar from '@mui/material/Snackbar';

const ForgotPassword = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    let navigate = useNavigate();

    const handleClick = () => {
        setMessage("OTP SENT");
        setOpen(true);
        navigate('/forgot/otp');
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
                <ImageContainer style={{width: "30%", flex: "none"}}>
                    <Image src="https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png" />
                </ImageContainer>

                <Form>
                    <FormTitle>SEND EMAIL</FormTitle>
                
                    <InputContainer>
                        <Input placeholder = "Email Id" />
                    </InputContainer>

                    <Button onClick={handleClick}>SEND</Button>

                    <Link style={{textAlign: "center"}} href="/login">Go Back</Link>
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

export default ForgotPassword