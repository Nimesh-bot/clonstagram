import { useState } from "react"
import styled from "styled-components"
import { bg, disabled, light, primary, secondary } from "../assets/Colors"
import { tablet } from "../responsive/responsive"

import showPwdImg from '../assets/Images/visibility.png';
import hidePwdImg from '../assets/Images/visibility-off.png';

const Container = styled.div`
    width: 100%;
    background-color: ${bg};
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Wrapper = styled.div`
    width: 70%;
    margin: 1rem;
    display: flex;
    flex-direction: column;

    ${tablet({
        width: "100%"
    })}
`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
`

const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 3rem;
    background-color: ${light};
    border-radius: 4px;
    margin: 0.75rem 0;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
`
const Input = styled.input`
    border: none;
    background-color: transparent;
    width: 60%;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.5rem;
`
const Button = styled.button`
    margin: 2rem 0;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: ${primary};
    font-size: 0.75rem;
    color: ${light};
    border: none;

    &:hover {
        background-color: ${secondary};
    }
`

const EditPersonal = () => {
    const [pwd, setPwd] = useState('');
    const [newpwd, setNewPwd] = useState('');
    const [confirm, setConfirm] = useState('');
    
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [isRevealNewPwd, setIsRevealNewPwd] = useState(false);
    const [isRevealConfirmPwd, setIsRevealConfirmPwd] = useState(false);

    return (
        <Container>
            <Wrapper>
                <Form>
                    <InputWrapper>
                        <Input 
                            name="pwd"
                            placeholder="Current Password"
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
                            
                    </InputWrapper>

                    <InputWrapper>
                        <Input 
                            name="newpwd"
                            placeholder="New Password"
                            type={isRevealNewPwd ? "text" : "password"}
                            value={newpwd}
                            onChange={e => setNewPwd(e.target.value)}
                        />
                        <img
                            title={isRevealNewPwd ? "Hide password" : "Show password"}
                            src={ isRevealNewPwd ? showPwdImg : hidePwdImg}
                            alt = "visibility"
                            onClick={() => setIsRevealNewPwd(prevState => !prevState)}
                            style={{width: "1.5rem", height: "1.5rem", margin: "1rem"}}
                        />
                            
                    </InputWrapper>

                    <InputWrapper>
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
                            
                    </InputWrapper>

                    <Button>CONTINUE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default EditPersonal