import { useState } from "react"
import styled from "styled-components"
import { bg, primary, secondary, text } from "../assets/Colors"
import { tabsData } from "../data"
import { mobile, tablet } from "../responsive/responsive"
import EditPersonal from "../components/EditPersonal";
import Security from "../components/Security";
import NavBar from "../components/NavBar"
import BotNav from '../responsive/BotNav'

const Container = styled.div`
    width: 100%;
    background-color: ${bg};
    display: flex;
    margin: 5rem 0 0 0;
    flex-direction: column;
    align-items: center;
`
const Wrapper = styled.div`
    width: 50%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    ${tablet({
        width: "80%"
    })}
`
const TabsWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    
    ${mobile({
        width: "100%",
    })}
`
const Tabs = styled.div`
    padding: 1rem;
    font-size: 0.75rem;
    cursor: pointer;
    color: ${text};
`
const Content = styled.div`
    width: 100%;
    margin: 0 auto;
`
const Line = styled.div`
    width: 3.25rem;
    height: 2px;
    background-color: ${primary};
    left: ${props => props.left};
    top: 2.5rem;
    position: absolute;
    transition: all 0.5s ease-in-out;

    ${tablet({
        left: props => props.tabLeft
    })}

    ${mobile({
        left: props => props.mLeft
    })}
`

const Edit = () => {
    const [tab, setTab] = useState(1)
    
    return (
        <>
            <NavBar />
            <BotNav />
            <Container>
                <Wrapper>
                    <TabsWrapper>
                        {tabsData.map((item) => (
                            <Tabs key={item.id} onClick={() => setTab(item.id)}>{item.name}</Tabs>
                        ))}
                    </TabsWrapper>
                    {
                        (tab === 1) ?
                        (
                            <Line left="12.6rem" tabLeft="10.6rem" mLeft="1rem"/>
                        )
                        :
                        (
                            <Line left="31rem" tabLeft="25rem" mLeft="12rem"/>
                        )
                    }

                    <Content>
                        {
                            (tab === 1) ?
                            (   
                                <EditPersonal />
                            )
                            :
                            (
                                <Security />
                            )
                        }
                    </Content>
                </Wrapper>
            </Container>
        </>
    )
}

export default Edit