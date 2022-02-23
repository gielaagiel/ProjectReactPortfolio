
import React from 'react'
import styled, { ThemeProvider} from 'styled-components'
import { lightTheme} from './Themes'
import { Design, Develope} from './AllSvgs'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponents'
import SocialIcon from '../subComponents/SocialIcon'
import ParticleComponent from '../subComponents/ParticleComponent'
import cartoon from '../assets/Images/cartoon.png'

const Box = styled.div`
background-color : ${ props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;

`
const Main = styled.div`
border: 2px solid ${props =>props.theme.text};
color : ${ props => props.theme.text};
background-color : ${ props => props.theme.body};
padding: 2.5rem;
width:30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor:pointer;
margin:10vh 0;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
border-radius: 20px;

&:hover{
    color: ${ props => props.theme.body};
    background-color : ${ props => props.theme.text};
}

`
const Title =styled.h2`
display:flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${ props => props.theme.body};
    }
}

&>*:first-child{
    margin-right: 1rem;
}
`
const Description = styled.div`
color : ${ props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0 ;

${Main}:hover &{
        color:${ props => props.theme.body};
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
up,p{
    margin-left:2rem;
}
`
const Subbox = styled.div`
width: 100%;
position: relative;
display:flex;

   
.pic{
position: absolute;
bottom: 2vh;
left: 50%;
transform: translate(-50%,0%);
width: 50%;
height: auto;
}
`



const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
        <Box>
            <LogoComponent theme='light'/>
            <SocialIcon theme='light' />
            <PowerButton />
            <ParticleComponent theme='light'/>
            <Main>
                <Title>
                    <Design width={40} height={40}/> Designer
                </Title>
                <Description>
                I love to create design which speaks, Keep it clean, minimal and simple.
                </Description>
                <Description>
                <strong> I like to Design</strong>
                <ul>
                    <li>
                        Web Design
                    </li>
                    <li>
                        Mobile Apps
                    </li>
                    <li>
                        Tools UI
                    </li>
                    <li>
                        Logo and etc
                    </li>
                </ul>
                <strong>TOOLS</strong>
                <ul>
                    <li>
                    Adobe PS AI AE XD , FIGMA, etc.
                    </li>
                </ul>
                </Description>
            </Main>
            <Main>
                <Title>
                <Develope width={40} height={40}/> Frontend Developer
                </Title>
                <Description>
                I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                </Description>
                <Description>
                <strong>SKILLS</strong>
                <ul>
                    <p>
                    Html, Css, Js, React, Bootstrap,
                    MS Office, Creative Design, DEV App AR.
                    </p>
                </ul>
                <strong>TOOLS</strong>
                <ul>
                    <p>
                    VScode, Adobe, UNITY, etc.
                    </p>
                </ul>
                </Description>
            </Main>
                   
        </Box>
        <Subbox>
            <img className='pic' src={cartoon} alt='Pic' />
            </Subbox>
        </ThemeProvider>
        
    )
}

export default MySkillsPage
