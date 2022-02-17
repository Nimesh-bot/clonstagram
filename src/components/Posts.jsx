import { ChatBubbleOutlineOutlined, Favorite, FavoriteBorder, Send } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"
import { disabled, light, primary, text } from "../assets/Colors"
// import { postsData } from "../data"
import { user } from "../data"
import { mobile } from "../responsive/responsive"

const Container = styled.div`
    width: ${props => props.flex};
    display: flex;
    flex-direction: column;
    align-items: center;      

    ${mobile({
        width: "100%",
    })}
`
const Wrapper = styled.div`
    width: 100%;
    margin: 1rem;
    border-radius: 4px;
    background-color: ${light};
`
const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
`
const Avatar = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
`
const PostedBy = styled.h3`
    padding: 0 1rem;
    font-size: 1rem;
    font-weight: 400;
`
const ContentContainer = styled.div`
    width: 100%;
`
const ImageWrapper = styled.div`
    aspect-ratio: 3/2;
    overflow: hidden;
`
const Image = styled.img`
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: contain;
`
const Interactions = styled.div`
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
`
const CommentBox = styled.div`
    width: 100%;
    padding: 1rem;
`
const CommentWrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin: 1rem 0;
`
const CommentedBy = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Name = styled.h3`
    font-size: 0.75rem;
    font-weight: 400;
    padding: 0 1rem;
`
const TextWrapper = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem 0 0;
    text-align: start;
`
const Desc = styled.p`
    font-size: 0.75rem;
    font-weight: 300;
`
const Input = styled.input`
    width: 80%;
    padding: 0.5rem;
    border: 0.25px solid ${disabled};
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 300;
` 
const Button = styled.button`
    width: 18%;
    border: none;
    margin: 0 0.5rem;
    background-color: ${primary};
    border-radius: 4px;
    padding: 0.3rem 0;
`

const Posts = (props) => {
    const [postsData, setPostsData] = useState([
        {
            id: 1,
            title: "Yahallo",
            image: "https://img5.goodfon.com/wallpaper/nbig/f/b0/yui-yuigahama-oregairu-devushka-shkolnitsa-nebo-vecher.jpg",
            postedBy: "ExtremeWeeb11",
            postedOn: "2 days ago",
            liked: false,
            comments: false,
            avatar: "https://i.pinimg.com/564x/4a/cc/43/4acc439bb9275683ed786f79526b8f35.jpg",
            content: "Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euism",
            post_comments: [
                {
                    id: 1,
                    comment: "euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt ",
                    postedBy: "Jimmy Harpins",
                    postedOn: "1 day ago",
                    avatar: "https://i.pinimg.com/736x/70/af/b6/70afb680fddd3273d1d5fe4a34cc35a5.jpg"
                },
            ],
        },
        {
            id: 2,
            title: "Post 1",
            image: "https://www.agiledrop.com/sites/default/files/styles/team_member_thumbnail/public/2021-08/Tilen%20G..png?itok=p9Q1Wt4a",
            postedBy: "Jimmy Harpin",
            postedOn: "1 day ago",
            liked: false,
            comments: false,
            avatar: "https://i.pinimg.com/736x/70/af/b6/70afb680fddd3273d1d5fe4a34cc35a5.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euism",
            post_comments: [
                {
                    id: 1,
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc, euismod aliquet nunc nisl eget ipsum. Sed euismod, urna eu tincidunt ",
                    postedBy: "John Doe",
                    postedOn: "1 day ago",
                    avatar: "https://i.pinimg.com/564x/93/e9/ed/93e9ed0335cc68c1e1a13dfc17b6822a.jpg"
                },
            ],
        },
    ])
    const [comment, setComment] = useState('');
    const [showComment, setShowComment] = useState(false);

    const handleLike = index =>  (e) => {
        window.location.reload(); //Reloads the page to update the like status
        let newArr = [...postsData];
        newArr[index].liked = !newArr[index].liked;
        console.log(newArr[index].liked);
    }

    return (
        <Container flex={props.flexSize}>
            {postsData.map((post, index) => (
                <Wrapper>
                    <Header>
                        <Avatar src={post.avatar} />
                        <PostedBy>{post.postedBy}</PostedBy>
                    </Header>
                    <ContentContainer>
                        <ImageWrapper>
                            <Image src={post.image} />
                        </ImageWrapper>
                    </ContentContainer>
                    <Interactions>
                        {
                            (post.liked === true) ? 
                            (<Favorite sx={{color: `${primary}`}} onClick={handleLike(index)} />)
                            :
                            (<FavoriteBorder onClick={handleLike(index)} />)
                        }
                        
                        <ChatBubbleOutlineOutlined onClick={() => setShowComment(!showComment)}/>
                    </Interactions>
                    {
                        (showComment === true) ?
                        ( 
                            <>
                                <CommentBox>
                                    <CommentWrapper>
                                        <CommentedBy>
                                            <Avatar src={user.avatar} />
                                            <Name>{user.name}</Name>
                                        </CommentedBy>
                                        <TextWrapper>
                                            <Input type="comment" placeholder="Write your comment here.." onChange={(e) => setComment(e.target.value)}/>
                                            <Button><Send fontSize="small" sx={{color: `${light}`}}/></Button>
                                        </TextWrapper>
                                    </CommentWrapper>
                                    {post.post_comments.map((item) => (
                                        <CommentWrapper>
                                            <CommentedBy>
                                                <Avatar src={item.avatar} />
                                                <Name>{item.postedBy}</Name>
                                            </CommentedBy>
                                            <TextWrapper>
                                                <Desc>{item.comment}</Desc>
                                            </TextWrapper>
                                        </CommentWrapper>
                                    ))}
                                </CommentBox>
                            </>
                        )
                        :
                        (<></>)
                    }
                </Wrapper>
            ))}
        </Container>
    )
}

export default Posts