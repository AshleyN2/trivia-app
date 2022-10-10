import React from 'react'

const Guide = () => {
    return (
        <div className='guide' 
        style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1594644465932-1113477ed386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1400px 600px'
        }}>
            <div className='guide-text'>
            <h1>How It Works</h1>
            <section className='guide-list'>
                <li>
                    The Trivia tests your knowledge on Computers   
                </li>
                <li>
                    Two
                </li>
            </section>   
            </div>
        </div>
    )
}
export default Guide;