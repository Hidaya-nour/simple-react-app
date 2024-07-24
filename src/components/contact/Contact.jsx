import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import menu_icon from '../../assets/menu-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-call">
        <h3>send us a massage <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil deserunt omnis labore sunt distinctio deleniti est magnam neque quia adipisci.</p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@hraa</li>
          <li><img src={phone_icon} alt="" />+ 838 03478</li>
          <li><img src={location_icon} alt="" />addis kolfe keranio</li>
        </ul>
      </div>
      <div className="contact-call">
        <form action="">
          <label htmlFor="">Your name</label>
          <input type="text" name="name" id="" placeholder='enter your name' />
          <label htmlFor="">Phone Number</label><label htmlFor=""></label>
          <input type="tel" name='phone' placeholder='enter your mobile' required />
          <label htmlFor="">write your message</label>
          <textarea name="message" rows= "6" placeholder='enter your message' id=""></textarea>
          <button type='submmit' className=' dark-btn'> submit now<img src={white_arrow} alt="" /></button>
        </form>
      </div>
    </div>
  )
}

export default Contact
