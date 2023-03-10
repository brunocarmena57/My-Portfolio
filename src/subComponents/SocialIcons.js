import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github, LinkedIn } from '../components/AllSvgs'
import { DarkTheme } from '../components/Themes'
import { motion } from 'framer-motion';
import { mediaQueries } from "../components/Themes";

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;


z-index: 3;

&>*:not(:last-child) {
    margin: 0.5rem 0;
}
${mediaQueries(20)`
margin: 0.3rem 0;


`};
}

${mediaQueries(40)`
left: 1rem;

svg{
  width:20px;
  height:20px
}

`};
`;

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body };
`

const SocialIcons = (props) => {
    const mq = window.matchMedia("(max-width: 40em)").matches;
  return (
    
    <Icons>
        <motion.div
        initial={{
            transform:"scale(0)"
        }}
        animate={{
            scale:[0,1,1.5,1]
        }}
        transition={{
            type:'spring', duration: 1, delay :1.2
        }}
        >   
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/brunocarmena57"}}>
                <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </motion.div>

        <motion.div
        initial={{
            transform:"scale(0)"
        }}
        animate={{
            scale:[0,1,1.5,1.4]
        }}
        transition={{
            type:'spring', duration: 1, delay :1.4
        }}
        >
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.linkedin.com/in/bruno-ricardo-carmena-a6a21a1b1"}}>
                <LinkedIn width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </motion.div>

        <Line color={props.theme}
        initial={{
            height: 0
        }}
        animate={{
          height: mq ? "5rem" : "8rem"
        }}
        transition={{
            type:'spring', duration: 1, delay: 0.8
        }}


        />
    </Icons>
  )
}

export default SocialIcons