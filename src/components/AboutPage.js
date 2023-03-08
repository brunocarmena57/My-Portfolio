import React, { lazy, Suspense } from 'react'
import { motion } from 'framer-motion';
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme, mediaQueries } from './Themes'
import Loading from '../subComponents/Loading';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';

import astronaut from '../assets/Images/spaceman.png';




const BigTitle = lazy(() => import('../subComponents/BigTitle'))

const Box = styled(motion.div)`
background-color: ${props => props.theme.text};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`

const Spaceman = styled(motion.div)`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;

img {
  widh: 100%;
  height: auto;
}
`

const Main = styled(motion.div)`
border: 2px solid ${props => props.dark};
color: ${props => props.theme.body};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family: 'Ubuntu Mono', monospace;
font-style: italic;

${mediaQueries(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};
  `


const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading/>}>
<Box
key='skills'
initial={{ opacity: 0 }}
animate={{ opacity: 1, transition: { duration: 0.5 } }}
exit={{ opacity: 0, transition: { duration: 0.5 } }}

>
  <LogoComponent theme='light' />
  <SocialIcons  theme='light'/>
  <PowerButton />
  <ParticleComponent theme='light' />
    
    <Spaceman
     initial={{ right: '-20%', top: '100%' }}
     animate={{
       right: '5%',
       top: '10%',
       transition: { duration: 2, delay: 0.5 },
       }}>
     <img src={astronaut} alt="spaceman" />
    </Spaceman>
    <Main
     initial={{ opacity: 0 }}
     animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
     >
      Sou um Full Stack Developer, morando atualmente em Curitiba/Pr. Gosto de criar projetos e afrontar novos desafíos todos os dias, explorando coisas novas e aprimorando as minhas habilidades.<br></br>
      Estou apaixonado na área de Desenvolvimento Web e Aplicativos Móveis, cursando atualmente Análise e Desenvolvimento em Sistemas.<br></br>
      Eu acredito que qualquer coisa pode ser maravilhosa quando você coloca a tua consciência naquilo. Sinta-se livre de entrar em contato comigo!{' '}
    </Main>

    <BigTitle text="SOBRE MIM" top="10%" left="10%"></BigTitle>

      </Box>
      </Suspense>
    </ThemeProvider>
    
  )
}

export default AboutPage