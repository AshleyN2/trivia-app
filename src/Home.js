import React from 'react'

const Home = () => {
  return (
    <div 
    className='home'
    style={{ 
      backgroundImage: `url(https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
    }} >
      <div className='home-text'
      style={{}}>
      <h1>Let's Get Quizzical!</h1> 
      <p>Big brain time</p>
     </div>
    </div>
  )
}

export default Home;