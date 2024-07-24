import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/navigation/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Gallary from './components/gallary/Gallary'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      < Navbar/>
      <Hero/>
      <div className='container'>
        <Title title='what we offer' subtitle= 'our program' /> 
        <Programs/>
        <About />
        <Title title='gallary' subtitle= 'cumpus photos' /> 
        <Gallary/>
        <Title title='testimonisl' subtitle= 'what students say' /> 
        < Testimonial/>
        <Title title='contact us' subtitle= 'get in touch' /> 
        <Contact/>
        <Footer/>

      </div>
      

  </React.StrictMode>,
)
