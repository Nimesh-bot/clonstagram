import { useState } from "react"
import styled from "styled-components"
import { disabled, light, primary, text } from "../assets/Colors"
// import { getUsers } from "../data"
import { user } from "../data"
import { mobile, tablet } from "../responsive/responsive"

const Container = styled.div`
    width: ${props => props.flex};
    display: flex;
    margin: 1rem 5rem;
    flex-direction: column;
    position: fixed;
    right: 0;

    ${tablet({
        width: `${props => props.mobileWidth}`,
        margin: "1rem 0 0 3rem"
    })}

    ${mobile({
        display: "none"
    })}
`
const Title = styled.h1`
    font-size: 1rem;
    color: ${text};
    font-weight: 400;
    margin-bottom: 1rem;
`
const Wrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
`
const Avatar = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    object-fit: cover;

    ${tablet({
        width: "2.5rem",
        height: "2.5rem"

    })}
`

const Name = styled.h1`
    font-size: 0.75rem;
    font-weight: 400;
    margin: 0 0.5rem;
`
const Button = styled.button`
    padding: 0.5rem;
    font-size: 0.75rem;
    border: none;
    background-color: transparent;
    color: ${props => props.color};
    border-radius: 4px;
`
const Line = styled.div`
    height: 0.5px;
    background-color: ${disabled};
    width: 90%;
    margin: 1rem 0;
`
const Footer = styled.p`
    font-size: 0.7rem;
    color: ${disabled};
`

const Suggestions = (props) => {
    const [getUsers, setGetUsers] = useState([
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
    ]);

    const handleFollow = index =>  (e) => {
        let newArr = [...getUsers];
        newArr[index].followers.push(user);
        console.log(newArr[index].followers);
    }

    return (
        <Container flex={props.flexSize} mobileWidth={props.mWidth}>
            <Title>Suggestions for you</Title>
            {getUsers.map((value, index) => (
                <Wrapper key={index}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar src={value.avatar} />
                        <Name>{value.name}</Name>
                    </div>
                    <Button color={`${primary}`} border="none" onClick={handleFollow}>Follow</Button>
                </Wrapper>

            ))}
            <Line />  
            <Footer>2022 MANASHVERSE</Footer>  
        </Container>
    )
}

export default Suggestions