import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import about_icon from '../../assets/play-icon.png'


const About = () => {

  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src= {about_icon} alt="" className='about-icon' />
           
        </div>
        <div className='about-right'>
          <h3>Lorem ipsm dolor sit.</h3>
          <h1>Lorem, ipsum.</h1>
          <p>Lorem ipsum Lore ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorem non cupiditate repudiandae laudantium quidem laboriosam eveniet et atque impedit. dolor sit amet consectetur adipisicing elit. Ratione reprehenderit consequuntur adipisci! Sed recusandae, accusantium dolorem corporis hic culpa qui libero quidem perspiciatis! Reiciendis, sapiente vitae quasi odio corrupti aut? Corrupti.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, exercitationem veritatis tenetur incidunt accusamus harum quidem facilis dicta alorem10
             est, alias aliquam, qui earum quae!</p>
        </div>

    </div>
  )
}

export default About
