import React from 'react'
import intro from "./img/intro.png"
import "./Introduction.css"
function Introduction() {
return (
<div className='Introduction'>
    <h2>Program Introduction</h2>
    <div className="img-text-area">
    <img src={intro} height={200} alt="" />
    <span>Whether you're an aspiring Olympian
    or simply seeking the pinnacle of
    physical conditioning, we offer 
    tailored programs emphasizing movement
    and nutrition.</span>
    </div>
</div>
  )
}

export default Introduction
