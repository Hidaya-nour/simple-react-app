import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'


const Testimonial = () => {

  const slider=useRef();
  let tx =0;
  const slideForward=()=>{
    if(tx >-50){
      tx-=25;
    }
    slider.current.style.transform= `translateX(${tx}%)`;
  }
  const slideBackward=()=>{
    if(tx <0){
      tx+=25;
    }
    slider.current.style.transform= `translateX(${tx}%)`;

  }  
  return (
    <div className='testimonial'>
      <img src={next_icon} alt="" className='next-btn button' onClick={slideForward}/>
      <img src= {back_icon} alt="" className='back-btn button' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
              <div className="slide">
                  <div className='user_info'>
                    <img src={user1} alt="" />
                    <div>
                      <h3>mario</h3> 
                      <span>educity, usa</span>             
                    </div>
                  </div>
                  <p>Lorem           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, quo?
                  hjhgfghd dolor sit amet consectetur, adipisicing elit. Dolore qui hic dignissimos officiis sint quia.</p>
              </div>
            </li>
            
            <li>
              <div className="slide">
                  <div className='user_info'>
                    <img src={user2} alt="" />
                    <div>
                      <h3>henry</h3> 
                      <div>educity, usa</div>             
                    </div>
                  </div>
                  <p>Lorem           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, quo?
                  ipsum dolor sit amet consectetur, adipisicing elit. Vero qui mollitia voluptate, recusandae veritatis vel.</p>
              </div>
            </li>
            
            <li>  
              <div className="slide">
                <div className='user_info'>
                  <img src={user3} alt="" />
                  <div>
                    <h3>selam</h3> 
                    <div>educity, usa</div>             
                  </div>
                </div>
                <p>Lorem  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, quo?                ipsum dolor, sit amet consectetur adipisicing elit. Nostrum totam deleniti mollitia veniam nesciunt delectus.</p>            
              </div>
            </li>

            <li>
              <div className="slide">
                  <div className='user_info'>
                    <img src={user4} alt="" />
                    <div>
                      <h3>john</h3> 
                      <div>educity, usa</div>             
                    </div>
                  </div>
                  <p>Lorem           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, quo?
                  ipsum dolor sit, amet consectetur adipisicing elit. Quae, laborum obcaecati aliquid dolorum corrupti enim?</p>
              </div>
            </li>
        </ul>
      </div>
  
    </div>
    
)
}

export default Testimonial
