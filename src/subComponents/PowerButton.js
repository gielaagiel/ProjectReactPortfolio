//Home Button

import React from 'react'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'
import { NavLink } from 'react-router-dom'


const Power =styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%,0);

background-color: #FCF6F4;
padding: 1rem;
border-radius: 50%;
border: 1px solid #000;
width:4rem;
height: 4rem;

display:flex;
justify-content: center;
align-items: center;
z-index:3;

cursor:pointer;
&:hover{
    background-color: rgba(0,255,0,0.6);
    box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
}

&>*::first-child {
    text-decoration: none;
    color: inherit;
}

`

const PowerButton = () => {
    return (
        <Power>
            <NavLink to="/">
            <PowerBtn width={40} height={40} fill='curentColor' />
            </NavLink>
        </Power>
    )
}

export default PowerButton
