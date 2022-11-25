import React from 'react'
import './Header.css'

function Header() {
    return (
        <>
       <header>
        <span className="Initials"> 
            <a href="">R<span className="M">M</span></a>
         </span>
    <nav>
        <ol>
            <li><a href="#About"> About </a> </li>
            <li><a href="#Projects"> Projects </a></li>
            <li><a href="#Contacts"> Contact </a></li>
            
        </ol>
    </nav>
    </header>
            
        </>
    )
}

export default Header
