import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, mediaQueries } from './Themes'
import { lazy, Suspense } from "react";
import { Design, Develope } from './AllSvgs';
import { motion } from "framer-motion";
import Loading from "../subComponents/Loading";

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';

import BigTitle from '../subComponents/BigTitle';




const Box = styled(motion.div)`
background-color: ${props => props.theme.text};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

${mediaQueries(50)`
flex-direction:column;  
padding:8rem 0;
height:auto;
&>*:nth-child(5){
  margin-bottom:5rem;
}

`};
${mediaQueries(30)`

&>*:nth-child(5){
  margin-bottom:4rem;
}

`};
`;

const Main = styled.div`
border: 2px solid ${props => props.theme.body};
color: ${props => props.theme.body};
background-color: ${props => props.theme.text};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

${mediaQueries(60)`
height: 55vh;
`};

${mediaQueries(50)`
  width: 50vw;
  height: max-content;

`};

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover {
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
}
`;




const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${mediaQueries(60)`
font-size:calc(0.8em + 1vw);
`};

${mediaQueries(50)`
font-size:calc(1em + 2vw);
margin-bottom:1rem;
`};

${mediaQueries(30)`
            font-size:calc(1em + 1vw);
`};
${mediaQueries(25)`
            font-size:calc(0.8em + 1vw);
            svg{
              width:30px;
              height:30px;
            }
`};

${Main}:hover &{
  &>*{
    color: ${props => props.theme.text};
  }
}

&>*:first-child {
  margin-right: 1rem;
}
 
`;

const Description = styled.div`
color: ${props => props.theme.body};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;

${mediaQueries(50)`
font-size: calc(0.7em + 1vw);

`};

${mediaQueries(30)`
          font-size:calc(0.6em + 1vw);

  

`};

${mediaQueries(25)`
          font-size:calc(0.4em + 1vw);

  

`};

strong{
  margin-bottom: 1rem;
  text-transform: uppercase;
}
ul,p {
  margin-left: 2rem;
}

${Main}:hover &{
    color: ${props => props.theme.text};
}
`;


const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
<Box
 key="skills"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1, transition: { duration: 1 } }}
 exit={{ opacity: 0, transition: { duration: 0.5 } }}
>

  <LogoComponent theme='dark' />
  <SocialIcons  theme='dark'/>
  <PowerButton />
  <ParticleComponent theme='dark' />
      <Main>
<Title>
    <Design style={{color: '{props => props.theme.body}'}} width={40} height={40} /> Designer/ Frontend Developer
</Title>
<Description>
Eu adoro criar designs minimalistas e simples, procunado melhorar a interação com o usuário, criando novas experiências nunca antes vistas.
</Description>
<Description>
<strong>Designs de</strong>
<ul>
  <li>
    Web Design
  </li>
  <li>
    Mobile Apps
  </li>
</ul>
</Description>
<Description>
<strong>Ferramentas</strong>
<ul>
  <li>
    React, Bootstrap, React Native, etc.
  </li>
</ul>
</Description>

      </Main>
      <Main>
<Title>
    <Develope style={{color: '{props => props.theme.body}'}} width={40} height={40} /> Backend Developer
</Title>
<Description>
  Realizo diversos suportes à sistemas, brindando qualidade de código e estrutura, trazendo novas ideias e valorizando a marca ou negócio para o qual eu estou programando.
</Description>
<Description>
<strong>Linguagens</strong>
<p>
    Js, NodeJs, C#, .NET, etc.
 </p>
</Description>
<Description>
<strong>Ferramentas</strong>
<ul>
  <li>
     MySQL, OracleSQL, etc.
  </li>
</ul>
</Description>

      </Main>

      <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
      </Suspense>
    </ThemeProvider>
    
  )
}

export default MySkillsPage