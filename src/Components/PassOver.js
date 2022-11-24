import React from 'react'
import PassOverImg from '../PassOver.jpg'
import './PassOver.css'
import { useState } from 'react'
import Home from './Home'

function PassOver() {
    const [clicked, setClicked] = useState(false)
    const click = (event) => {
        event.preventDefault()

        setClicked(!clicked)
    }
    console.log(clicked)
    return (
        <>
           {!clicked ?  <div>
         <button onClick={click}>Back</button>
         <div className="img-container">
         <img src={PassOverImg}/>
           
            </div>
            <div className="PassOver_Bio"> <span className="passOver_Bio_title">Pass Over</span>  - directed by Antoinette Nwandu is a broadway play which tells the story of two young black men from chicago seeking for a better tomorrow where police violence has been a common issue towards African Americans. </div>
            </div>

               :<Home/>}
            </>
    )
}

export default PassOver
