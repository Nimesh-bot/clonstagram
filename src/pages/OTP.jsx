import React, { useState } from 'react'
import { Container, Form, FormTitle, Link, Button, Wrapper, ImageContainer, Image } from './Login';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const InputContainer = styled.div`
    width: 100%;
    display: flex;
`
const Input = styled.input`
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    font-size: 0.75rem;
    margin: 0.5rem;
`

const OTP = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');

    let navigate = useNavigate();

    const handleClick = () => {
        setMessage("OTP SENT");
        setOpen(true);
        navigate('/forgot/reset');
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
                    <Form>
                        <FormTitle>VERIFY OTP</FormTitle>
                    
                        <InputContainer>
                            <Input type="number" maxLength={1} onChange={(e) => {setOtp1(e.target.value)}}/>
                            <Input type="number" maxLength={1} onChange={(e) => {setOtp2(e.target.value)}}/>
                            <Input type="number" maxLength={1} onChange={(e) => {setOtp3(e.target.value)}}/>
                            <Input type="number" maxLength={1} onChange={(e) => {setOtp4(e.target.value)}}/>
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

export default OTP