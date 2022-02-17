import React, { useState } from 'react'
import styled from 'styled-components'
import { bg, light, primary, secondary } from '../assets/Colors'
import NavBar from '../components/NavBar'
import { tablet } from '../responsive/responsive'
import TextField from '@mui/material/TextField';
import BotNav from '../responsive/BotNav'

const Container = styled.div`
    width: 100%;
    background-color: ${bg};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 0 0 0;
`
const Wrapper = styled.div`
    width: 50%;
    margin: 1rem;
    display: flex;
    flex-direction: column;

    ${tablet({
        width: "80%"
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
const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 300;
    margin: 1rem 0;
`

const UploadImage = () => {
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    return (
        <>
            <NavBar />
            <BotNav />
            <Container>
                <Wrapper>
                    <Title>Share your memories</Title>
                    <Form>
                        <InputWrapper>
                            <Label>Description</Label>
                            <TextField 
                                multiline
                                rows={4}
                                sx={{ m: 1, width: "80%", fontSize: "0.75rem" }} 
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <Label>Image</Label>
                            <File type="file" className="custom-file-input" onChange={(e) => {setImage(e.target.files)}}/>
                        </InputWrapper>

                        <Button>UPLOAD</Button>
                    </Form>
                </Wrapper>
            </Container>
        </>
    )
}

export default UploadImage