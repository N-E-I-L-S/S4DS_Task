import React from 'react'

export default function Header() {
    const TextStyle ={
        display : 'inline',
        color: '#fffaf1',
        padding : '0.8rem 1.5rem 1.5rem',
        fontSize : '1.5rem',
        textDecoration : 'none'
    };
  return (
    <nav style = {{width : '101%'}}className="bg-dark p-4 header-class">
    <div className="header-content ">
        <img style ={{borderRadius : '100%', height : '3rem', width : '3rem'}}src={require("../headerimg.jpg")} alt="icon" />
        <a style={TextStyle} href = "/">My Gallery </a>
        <a style = {{float : 'right'}} target = "_blank" rel="noreferrer" href="https://github.com/N-E-I-L-S/">
          <img style = {{borderRadius : '100%', height : '2.5rem', width : '2.5rem'}}src={require("../githubicon.png")} alt="My Github" />
        </a>
    </div>
    </nav>
  )
}
