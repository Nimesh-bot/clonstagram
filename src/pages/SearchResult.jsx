import styled from "styled-components";
import { bg, primary, text } from "../assets/Colors";
import { mobile, tablet } from "../responsive/responsive";
import { user } from "../data"
import NavBar from "../components/NavBar";	
import BotNav from "../responsive/BotNav"; 
import { light } from "@mui/material/styles/createPalette";

const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 8rem 0;
    flex-direction: column;
    align-items: center;
    background-color: ${bg};
`
const Title = styled.h1`
    width: 50%;
    font-size: 1.2rem;
    color: ${text};
    font-weight: 600;
    margin-bottom: 1rem;

    ${mobile({
        width: "80%"
    })}
`
const Wrapper = styled.div`
    width: ${props => props.width};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem 0;

    ${mobile({
        width: "80%",
    })}
`
const Avatar = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    object-fit: cover;

    ${tablet({
        width: "2.5rem",
        height: "2.5rem"

    })}
`
const Name = styled.h1`
    font-size: 1rem;
    font-weight: 400;
    margin: 0.5rem;
`
const Button = styled.button`
    padding: 0.5rem;
    margin: ${props => props.margin};
    font-size: 0.75rem;
    border: 1px solid ${primary};
    background-color: ${props => props.bg};
    color: ${props => props.color};
    border-radius: 4px;
`

const SearchResult = () => {
    const getUsers = [
        {
            id: 1,
            name: "Silly",
            avatar: "https://i.pinimg.com/736x/56/ab/bf/56abbf782771ac4cf669e90de78df75c.jpg",
            followers: [
                {
                    id: 1,
                    name: "Haddy",
                    avatar: "https://i.pinimg.com/736x/96/5d/38/965d386105a7118e027ff5e4792e1b54.jpg",
                }
            ]
        },
        {
            id: 2,
            name: "Billy",
            avatar: "https://i.pinimg.com/564x/15/76/8f/15768fccfc80f29241006bdc93d8bfa7.jpg",
            followers: [
                {
                    id: 1,
                    name: "Haddy",
                    avatar: "https://i.pinimg.com/736x/96/5d/38/965d386105a7118e027ff5e4792e1b54.jpg",
                }
            ]
        },
        {
            id: 2,
            name: "Milly",
            avatar: "https://i.pinimg.com/564x/fc/e1/9d/fce19dd3e85c7fa376445f4ad8804f6b.jpg",
            followers: [
                {
                    id: 1,
                    name: "Haddy",
                    avatar: "https://i.pinimg.com/736x/96/5d/38/965d386105a7118e027ff5e4792e1b54.jpg",
                }
            ]
        }
    ];


    return (
        <>
            <NavBar />
            <BotNav />
            <Container>
                <Title>Search Results</Title>
                <Wrapper width="50%">
                    {getUsers.map((value, index) => (
                        <Wrapper width="100%" key={index} style={{justifyContent: "space-between"}}>
                            <div style={{ display: "flex", alignItems: "center"}}>
                                <Avatar src={value.avatar} />
                                <Name>{value.name}</Name>
                            </div>
                            <Button bg="transparent" color={`${primary}`}>View Profile</Button> 
                        </Wrapper>
                    ))}
                </Wrapper>
            </Container>
        </>
    )
}

export default SearchResult