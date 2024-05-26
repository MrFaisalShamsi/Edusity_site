import React from 'react'
import './Hero.css'
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container' id='hero' >
        <div className="hero-text">
            <h1>We ensure better education for a better world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet provident rem numquam ipsum, aut libero fuga ratione perferendis voluptatem?</p>
            <button className='btn' >Explor More<img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
