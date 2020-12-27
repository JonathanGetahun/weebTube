import React from 'react'
import logo from './GitHub-Mark-32px.png'

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p>2020 Created By: Jonathan Getahun</p>
            <div><a href="https://github.com/JonathanGetahun"> <img src={logo} alt="my github" /></a></div>
        </div>
    )
}

export default Footer
