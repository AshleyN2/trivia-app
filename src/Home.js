import React from 'react'

const Home = () => {
  return (
    <div 
    className='home'
    style={{ 
      backgroundImage: `url(https://images.unsplash.com/photo-1609643242070-c69786a76c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)`,
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