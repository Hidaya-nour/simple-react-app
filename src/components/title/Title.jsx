import React from 'react'
import './Title.css'
const Title = (prob) => {
  return (
    <div className='title'>
        <p>{prob.title}</p>
        <h1>{prob.subtitle}</h1>
    </div>
  )
}

export default Title
