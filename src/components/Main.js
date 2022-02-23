import React, { useState } from 'react'
import styled, { keyframes} from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponents'
import SocialIcon from '../subComponents/SocialIcon'
import { NavLink } from 'react-router-dom'
import { PowerBtn } from './AllSvgs'
import Intro from './Intro'
import { motion } from 'framer-motion'




const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;

h2,h3,h4,h5,h5,h6{
    font-family:'Karla', sans-serif;
    font-weight:500;
}
`
const Container = styled.div`
padding:2rem;
`
const  Contact = styled(NavLink)`
color: ${ props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`
const  BLOG = styled(NavLink)`
color: ${ props => props.theme.text};
position: absolute;
top: 50%;
right: calc(-1rem + 0.3vw);
transform: translate(-50%, -50%)rotate(90deg) ;
text-decoration: none;
z-index: 1;
`
const  WORK = styled(NavLink)`
color: ${ props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index: 1;
`
const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left:0;
right:0;
width:100%;

display:flex;
justify-content: space-evenly;
`
const ABOUT = styled(NavLink)`
color: ${ props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index: 1;
`


const SKILLS = styled(NavLink)`
color: ${ props => props.theme.text};
text-decoration: none;
z-index: 1;
`
const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '88%' : '50%' };
left: ${props => props.click ? '85%' : '50%' };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 3s ease;


&>: first-child{
    animation: ${rotate} infinite 7.5s ;
  
}
&>: last-child{
    display:${props => props.click ? 'none' : 'inline-block' };
    padding-top:1rem;
}
#span{
    top:-100px;
}
`
const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom:0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`



const Main = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            <Container>
            <DarkDiv click={click} />
                <PowerButton/>
                <LogoComponent theme={click ? 'dark' : 'light'} />
                <SocialIcon theme={click ? 'dark' : 'light'} />
                
                
                <Center click={click} >
                    <PowerBtn onClick={() => handleClick()} width={click ? 130 : 200} height={click ? 130 : 200} fill='currentColor' />
                    <span><b> Click here</b></span>
                    
                </Center>
                
                <Contact target="_blank" to={{pathname:"mailto: agilseptiapamungkas@gmail.com"}}>
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type: 'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type: 'spring', duration: 1.5, delay:0.8}
                    }}
                    whileHover={{scale:1.2}}
                    whileTap={{scale:0.9}}
                    >
                        Contact me
                    </motion.h2>
                </Contact>
                <BLOG to="/blog">
                    <motion.h2
                      initial={{
                        y:-200,
                        transition: { type: 'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type: 'spring', duration: 1.5, delay:0.8}
                    }}
                     whileHover={{scale:1.2}}
                     whileTap={{scale:0.9}}
                    >
                        BLOG
                    </motion.h2>
                </BLOG>
                <WORK to="/work" click={click}>
                    <motion.h2
                      initial={{
                        y:-200,
                        transition: { type: 'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type: 'spring', duration: 1.5, delay:0.8}
                    }}
                     whileHover={{scale:1.2}}
                     whileTap={{scale:0.9}}
                    >
                        WORK
                    </motion.h2>
                </WORK>
                <BottomBar>
                    <ABOUT to="/about" click={click}>
                        <motion.h2
                          initial={{
                            y:200,
                            transition: { type: 'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type: 'spring', duration: 1.5, delay:0.8}
                        }}
                         whileHover={{scale:1.2}}
                         whileTap={{scale:0.9}}
                        >
                            About.
                        </motion.h2>
                    </ABOUT>
                    <SKILLS to="/skills">
                        <motion.h2
                          initial={{
                            y:200,
                            transition: { type: 'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type: 'spring', duration: 1.5, delay:0.8}
                        }}
                         whileHover={{scale:1.2}}
                         whileTap={{scale:0.9}}
                        >
                            My Skill.
                        </motion.h2>
                    </SKILLS>
                </BottomBar>
            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}

export default Main
