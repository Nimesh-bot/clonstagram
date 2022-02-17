import { useState } from "react"
import styled from "styled-components"
import { bg, disabled, light, primary, secondary } from "../assets/Colors"
import { mobile, tablet } from "../responsive/responsive"
import { user } from "../data"
import './CustomFile.scss'

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
    margin: 0.75rem 0;
    align-items: center;
    justify-content: space-between;
`
const Input = styled.input`
    border: 0.5px solid ${disabled};
    background-color: transparent;
    width: 60%;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.5rem;
`
const File = styled.input`
    border: none;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    width: 60%;	
    padding: 0.5rem;
`
const Label = styled.label`
    font-size: 0.75rem;
    font-weight: 400;
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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [avatar, setAvatar] = useState('');

    return (
        <Container>
            <Wrapper>
                <Form>
                    <InputWrapper>
                        <Label>Username</Label>
                        <Input placeholder={user.name} onChange={(e) => {setName(e.target.value)}}/>
                    </InputWrapper>

                    <InputWrapper>
                        <Label>First Name</Label>
                        <Input placeholder={user.fname} onChange={(e) => {setFname(e.target.value)}}/>
                    </InputWrapper>
                    
                    <InputWrapper>
                        <Label>Last Name</Label>
                        <Input placeholder={user.lname} onChange={(e) => {setLname(e.target.value)}}/>
                    </InputWrapper>
                    
                    <InputWrapper>
                        <Label>Email</Label>
                        <Input type="email" placeholder={user.email} onChange={(e) => {setEmail(e.target.value)}}/>
                    </InputWrapper>

                    <InputWrapper>
                        <Label>Profile Avatar</Label>
                        <File type="file" className="custom-file-input" onChange={(e) => {setAvatar(e.target.files)}}/>
                    </InputWrapper>

                    <Button>SUBMIT</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default EditPersonal