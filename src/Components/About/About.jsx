import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className='about' id='about' >
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon'onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur dolore amet consequuntur similique doloremque a cupiditate veniam aperiam. dolor sit amet consectetur adipisicing elit. Error non, doloremque voluptatum ex harum repudiandae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur dolore amet consequuntur similique doloremque a cupiditate veniam aperiam. dolor sit amet consectetur adipisicing elit. Error non, doloremque voluptatum ex harum repudiandae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur dolore amet consequuntur similique doloremque a cupiditate veniam aperiam.</p>
      </div>
    </div>
  )
}

export default About
