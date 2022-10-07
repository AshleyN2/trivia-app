import React from 'react'

const Home = () => {
  return (
    <div 
    className='home'
    style={{ 
      backgroundImage: `url(https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80)`,
      backgroundRepeat: 'no-repeat',
      backgroundCover: 'cover',
      backgroundPosition: 'center',
      width:'100%',
      margin: ' 0 auto',
    }} >
      <div className='home-text'>
      <h1>Let's Get Quizzical!</h1> 
      <p>Big brain time</p>
     </div>
    </div>
  )
}

export default Home;