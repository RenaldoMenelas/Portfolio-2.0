import React from 'react'
import './Home.css'
import Pic from '../programmer.png'
import Raised from '../img.jpeg'
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { useState } from 'react'
import passOver from './PassOver'
import PassOver from './PassOver';
import Header from './Header'




const Hero = () => {
    const [clicked, setClicked] = useState(false)
    const click = (event) => {
        event.preventDefault()

        setClicked(!clicked)
    }
console.log(clicked)
    return (
        <>
            
            {!clicked ? <div>      <Header/>

                
    <h1 id="About">Hi 👋, I'm Renaldo Menelas</h1>
    <div className="bio">
    A <span className="Frontend_Dev" >Frontend Developer </span> based in Nyc.
    <br/>
    I specailize in creating Frontend Applications as well as dabble in graphic design
    </div>
            
                <div className="bio2">I'm a web developer with in-depth experience in UI/UX design. In a nutshell, I create websites and applcications that help organizations address business challenges and meet their needs. I manage everything from website navigation and layout to a company's web hosting and security architecture</div>
           
            
<div className="vertical_line1"></div>
<h2>Skills</h2>
<div className="skills">
 <ul>
     <li>Html</li>
     <li>Css</li>
     <li>Javascript</li>
     <li>Sass</li>
     <li>Figma</li>
     <li>React</li>
     <li>JSON</li>
     <li>GitHub</li>
                    
 </ul>
     
            </div>
            <h3 id="Projects" >Projects </h3>
   
 <div className="projects-container">
      <div id="projects" className="first-project-cover">
       <a href="https://renaldomenelas.github.io/SavanahDining/">
                        <b>Savannah Dining</b>
                       <div id="ProjectDescription">Italian Styled Restaurnt <br/>Make a Reservation Today! </div>
        
       </a>
      </div>

    <div id="projects" className="second-project-cover">
        <a href="https://museumexperiencepythonfe.netlify.app/" > 
                        <b>Muesem Gallary </b>
                        <div id="ProjectDescription" >Ancient Artwork Gallery <br/> </div>
        </a>
                </div>
                

    <div id="projects" className="third-project-cover"> 
        <a href="https://renaldomenelas.github.io/countdown-app/">
                        <b>Birthday Countdown</b>
                       
                            <div id="ProjectDescription">Countdown untill your next Birthday <br /></div>
                            
        </a>
 </div>

</div>
        
 
 <div  className="other-container">
 <div onClick={click} id="projects">

    <a href="PassOver.html"> 
     <b>PassOver</b> 
    </a>
   
 </div>
                <div id="projects" className="PassOver-img-container">

    <a href="https://renaldomenelas.github.io/stretch-app/"> 
                      <b> Press & Stretch</b> 
                                            
    </a>
    
                       
 </div>
 
</div>
            <h2>Contact</h2>
            <div className="vertical_line1"></div>
             <div id="Contacts" className="contact">" If you have a general inquiry please drop me an email. If you have a project inquiry text me for quick response. "</div>
                <div className="icons-container">
                    
           <a href="mailto:renaldo.menelas@gmail.com"><FaEnvelope id="icons" /></a>
           <a href="https://www.linkedin.com/in/renaldo-menelas-9a11a8211/</div>"><FaLinkedin  id="icons" /></a> 
           <a href="https://github.com/RenaldoMenelas" ><FaGithubAlt  id="icons" /></a>
           <a href="tel:7182828098"><FaPhone  id="icons" /></a>    
            </div>
            <div className="Name">Renaldo Menelas</div>
            <div className="Copyright">Copyright 2022<br/> All rights reserved Renaldo Menelas</div>

            </div>  : <PassOver/>}
      
        </>
    )
}

export default Hero
