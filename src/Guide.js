import React from 'react'

const Guide = () => {
    return (
        <div className='guide'
        style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80)`,
        }}>
            <p className='parguide'>Welcome to this computer trivia. Test your knowledge on 
                how much you know about technological science and inventions. Click on 'Quiz' in the 
                navigation bar at the top once you're ready to begin.All the best!  </p>
        </div>
    )
}
export default Guide;