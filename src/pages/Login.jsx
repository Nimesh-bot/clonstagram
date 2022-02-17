import React, { useState } from 'react'
import styled from 'styled-components'
import showPwdImg from '../assets/Images/visibility.png';
import hidePwdImg from '../assets/Images/visibility-off.png';
import { bg, light, primary, secondary, text } from '../assets/Colors';
import { mobile, tablet } from '../responsive/responsive';

import Snackbar from '@mui/material/Snackbar';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${bg};
    align-items: center;
    justify-content: center;
`
export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    ${mobile ({
        width: "75%"
    })}
`
export const ImageContainer = styled.div`
    flex: 1;

    ${mobile ({
        display: "none"
    })}
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const Form = styled.form`
    width: 40%;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;

    ${mobile({
        width: "100%",
    })}
`
export const FormTitle = styled.h1`
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align: center;
    font-weight: 400;
`    
export const InputContainer = styled.div`
    display: flex;
    height: 2rem;
    padding: 0.3rem;
    background-color: ${light};	
    border-radius: 4px;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    margin: 0.5rem 0;
`
export const Link = styled.a`
    color: ${primary};
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-decoration: none;
    margin-top: ${props => props.margin}
`
export const Input = styled.input`
    font-size: 0.75rem;
    padding: 0.5rem;
    height: 40%;
    border-radius: 8px;
    border: none;
    background-color: ${light};
`
export const Button = styled.button`
    width: 100%;
    border: none;
    padding: 10px;
    margin: 20px 0;
    background-color: ${primary};
    color: ${light};
    cursor: pointer;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 500;

    &:hover{
        background-color: ${secondary};
    }
`


const Login = () => {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    
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
                    <FormTitle>Login</FormTitle>
                
                    <InputContainer>
                        <Input placeholder = "Username" />
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

                    <Link margin="0.5rem" href="/forgot">Forgot Password</Link>

                    <Button onClick={handleClick}>SIGN IN</Button>

                    <Link style={{textAlign: "center"}} href="/register">Go to Register</Link>
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

export default Login