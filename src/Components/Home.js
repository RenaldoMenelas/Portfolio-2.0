import React from 'react'
import './Home.css'
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { RiExternalLinkFill,RiGithubLine } from 'react-icons/ri';
import { useState } from 'react'
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
            
            {!clicked ? <div>   <Header/>

             
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
      <div id="projects" className="first-project">
       
                        <b>Savannah Dining</b>
                            <div id="ProjectDescription">Italian Styled Restaurant </div>
                        
                       
                            <div className="project-icons">
                                <a href="https://github.com/RenaldoMenelas/SavanahDining">
                                <RiGithubLine className="project-icons" style={{ margin: '0 16px 0 16px' }} /> </a>
                                <a href="https://renaldomenelas.github.io/SavanahDining/">
                                <RiExternalLinkFill   style={{ margin:'0 16px 0 16px'}} /> </a>
                                </div>
                     
      
      </div>

    <div id="projects" className="second-project">
    
                        <b>Museum Gallery </b>
                        <div id="ProjectDescription" >Ancient Artwork Gallery <br/> </div>
                        
                       
                        <div className="project-icons">
                                <a href="https://github.com/RenaldoMenelas/MuseumExperience-Group2-Python-FE-1">
                                <RiGithubLine className="project-icons" style={{ margin: '0 16px 0 16px' }} /> </a>
                                <a href="https://museumexperiencepythonfe.netlify.app/">
                                <RiExternalLinkFill   style={{ margin:'0 16px 0 16px'}} /> </a>
                                </div>
                     
      
                     
                </div>
                

    <div id="projects" className="third-project"> 
       
                        <b>Drag N Drop Bit</b>
                       
                            <div id="ProjectDescription">Interactive Binary Drag N Drop Game <br /></div>
                            
                  

                        <div className="project-icons">
                                <a href="https://github.com/RenaldoMenelas/BinaryDragNDropGame">
                                <RiGithubLine className="project-icons" style={{ margin: '0 16px 0 16px' }} /> </a>
                                <a href="https://renaldomenelas.github.io/BinaryDragNDropGame/">
                                <RiExternalLinkFill   style={{ margin:'0 16px 0 16px'}} /> </a>
                                </div>
                     
      
                      
                    </div>
                    

                    

</div>
        
 
 <div  className="projects-2nd-row">
 <div id="projects" className="fourth-projec">
    
     <b>PassOver</b> 
     <div id="ProjectDescription">Sketch Poster <br /></div>
                        
                            <div className="project-icons">

                                <RiExternalLinkFill  onClick={click}   style={{ margin:'0 16px 0 16px'}} />
                                </div>
                     
                     
 </div>
                <div id="projects" >

  
                      <b> Press & Stretch</b>                                        
                       
                        <div id="ProjectDescription">Stretch For Success <br /></div>

                        <div className="project-icons">
                                <a href="https://github.com/RenaldoMenelas/stretch-app">
                                <RiGithubLine className="project-icons" style={{ margin: '0 16px 0 16px' }} /> </a>
                                <a href="https://renaldomenelas.github.io/stretch-app/">
                                <RiExternalLinkFill   style={{ margin:'0 16px 0 16px'}} /> </a>
                                </div>
                     
      
                   
 </div>
</div>
            <h2 id="Contacts">Contact</h2>
            <div className="vertical_line1"></div>
             <div  className="contact">" If you have a general inquiry please drop me an email. If you have a project inquiry text me for quick response. "</div>
                <div className="icons-container">
                    
           <a href="mailto:renaldo.menelas@gmail.com"><FaEnvelope id="icons" /></a>
           <a href="https://www.linkedin.com/in/renaldo-menelas-9a11a8211/"><FaLinkedin  id="icons" /></a> 
           <a href="https://github.com/RenaldoMenelas" ><FaGithubAlt  id="icons" /></a>
           <a href="tel:9179135722"><FaPhone  id="icons" /></a>    
            </div>
            <div className="Name">Renaldo Menelas</div>
            <div className="Copyright">Copyright 2022<br/> All rights reserved Renaldo Menelas</div>

            </div> : <PassOver/>}
      
        </>
    )
}

export default Hero
