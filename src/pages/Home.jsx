import React from 'react'
import styled from 'styled-components'
import { bg } from '../assets/Colors'
import NavBar from '../components/NavBar'
import Posts from '../components/Posts'
import Suggestions from '../components/Suggestions'
import { mobile } from '../responsive/responsive'

const Contents = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    padding: 2rem 2.5rem;
    background-color: ${bg};

    ${mobile ({
        marginTop: "4rem",
        padding: "1rem 0"
    })}
`
const Wrapper = styled.div`
    width: 85%;
    display: flex;
`

const Home = () => {
  return (
      <>
        <NavBar />
        <Contents>
            <Wrapper>
                <Posts flexSize="60%"/>  
                <Suggestions flexSize="30%" mWidth="15%"/>
            </Wrapper>

        </Contents>
      </>
  )
}

export default Home