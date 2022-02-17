import styled from "styled-components"
import { bg, light, primary, text } from "../assets/Colors"
import { user } from "../data" 
import { otherUser } from "../data" 
import { mobile, tablet } from "../responsive/responsive"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useEffect, useState } from "react"

const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 5rem 0;
    flex-direction: column;
    align-items: center;
    background-color: ${bg};
`
const Wrapper = styled.div`
    width: 50%;
    margin: 1rem;
    display: flex;

    ${tablet({
        width: "80%"
    })}

    ${mobile({
        width: "100%"
    })}
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    ${mobile({
        flexDirection: "column",
    })}
`
const Avatar = styled.img`
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    margin: 1rem;

    ${tablet({
        width: "9rem",
        height: "9rem",
    })}

`
const Details = styled.div`
    margin: 0 3rem;
    flex: 2;    
    display: flex;
    flex-direction: column;

    ${mobile({
        width: "80%"
    })}
`
const ProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection: "column",
        alignItems: "center",
    })}
`
const Title = styled.h1`
    font-size: ${props => props.size || "1.5rem"};
    font-weight: ${props => props.weight || "800"};

    ${mobile({
        textAlign: "center",
    })}
`
const Button = styled.button`
    padding: 0.5rem;
    margin: 0 1rem;
    border-radius: 4px;
    border: none;
    background-color: ${props => props.color};
    color: ${props => props.text};
`
const Status = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 1rem;

`
const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Topic = styled.p`
    font-size: 0.75rem;
    font-weight: 300;
    color: ${text};
`
const Contents = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${light};
    padding: 1rem 0;
`
const PostContainer = styled.div`
    margin: 1rem 0;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${tablet({
        width: "80%"
    })}
`
const Posts = styled.img`
    width: 14rem;
    height: 14rem;
    border-radius: 4px;
    object-fit: cover;
    margin: 1rem 0;

    ${tablet({
        width: "10rem",
        height: "10rem",
    })}

    ${mobile({
        width: "100%"
    })}
`

const Profile = () => {
    const { id } = useParams();
    console.log(id)

    const [userType, setUserType] = useState({
        id: 0,
        name: "",
        avatar: "",
        fname: "",
        lname: "",
        email: "",
        followers: [],
        following: [],
        posts: [],
    })

    useEffect(() =>{
        if(id === 1){
            setUserType(user);
        }
        else{
            setUserType(otherUser);
        }
    }, [id])
    return (
        <>
            <NavBar />

            <Container>
                <Wrapper>
                    <Header>
                        <Avatar src={userType.avatar} />
                        <Details>
                            <ProfileWrapper>
                                <Title weight="200">{userType.name}</Title>
                                {
                                    (id === 1) ? 
                                    (
                                        <>
                                            <Button color={`${primary}`} text={`${light}`}>Edit Profile</Button>
                                            <Button color="transparent" text="red">Log Out</Button>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <Button color={`${primary}`} text={`${light}`}>Follow</Button>
                                        </>
                                    )
                                }
                            </ProfileWrapper>
                            
                            <Status>
                                <Block>
                                    <Topic>Posts</Topic>
                                    <Title>{userType.posts.length}</Title>
                                </Block>
                                <Block>
                                    <Topic>Following</Topic>
                                    <Title>{userType.following.length}</Title>
                                </Block>
                                <Block>
                                    <Topic>Followers</Topic>
                                    <Title>{userType.followers.length}</Title>
                                </Block>
                            </Status>
    
                            <Title size="1rem" weight="400">{userType.fname} {userType.lname}</Title>
                        </Details>
                    </Header>
    
                </Wrapper>
                
                <Contents>
                    <Title weight="300">POSTS</Title>
                    <PostContainer>
                        {userType.posts.map((post) => (
                            <Posts src={post.image} />
                        ))}
                    </PostContainer>
                </Contents>
            </Container>
        </>
    )
}

export default Profile