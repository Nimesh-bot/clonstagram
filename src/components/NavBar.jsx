import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { bg, light, primary, text } from '../assets/Colors';
import { AddBoxOutlined, FavoriteBorderOutlined, Home, HomeOutlined } from '@mui/icons-material';
import { user } from '../data';
import { useLocation } from 'react-router-dom';
import { mobile, tablet } from '../responsive/responsive';

const Container = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: ${light};
`
const Wrapper = styled.div`
    width: 80%;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Lobster Two', cursive;
`
const SearchBox = styled.div`
    width: 15rem;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: ${bg};
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    ${mobile({
        display: "none"
    })}
`
const Input = styled.input`
    width: 80%;
    border: none;
    background-color: transparent;
`
const Navs = styled.div`
    width: 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({
        display: "none"
    })}

    ${tablet({
        width: "10rem"
    })}
`
const NavItem = styled.a`
    text-decoration: none;
    color: ${text};
`
const Profile = styled.img`
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    object-fit: cover;
    padding: 0.1rem;
    border: ${props => props.border};
`

const NavBar = () => {
    let location = useLocation();
    let currentLocation = location.pathname;

    return (
        <Container>
            <Wrapper>
                <Logo>Clonstagram</Logo>
                <SearchBox>
                    <SearchIcon />
                    <Input placeholder="Search" />
                </SearchBox>
                <Navs>
                    <NavItem href="/">
                        {currentLocation === '/' ? (<Home sx={{fontSize: 25}}/>) : (<HomeOutlined sx={{fontSize: 25}}/>)}
                    </NavItem>
                    <NavItem>
                        <AddBoxOutlined sx={{fontSize: 25}}/>
                    </NavItem>
                    <NavItem href="/profile/:id">
                        {currentLocation === '/profile/me' ? (<Profile border={`2px solid ${primary}`} src={user.avatar} />) : (<Profile src={user.avatar} />)}
                    </NavItem>
                </Navs>
            </Wrapper>
        </Container>
    )
}

export default NavBar