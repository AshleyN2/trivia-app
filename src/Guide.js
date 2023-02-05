import React from 'react'

const Guide = () => {
    return (
        <div className='guide' 
        style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className='guide-text'>
            <h1>How It Works</h1>
            <section className='guide-list'>
                <li>
                    This quiz tests on general computer knowledge.
                </li>
                <li>
                    As a player you will get 10 random questions to brainstorm on.
                </li>
                <li>
                    You can select the level of difficulty.
                </li>
                <li>
                    Are you ready? Select 'Quiz' on the menu start!
                </li>
            </section>   
            </div>
        </div>
    )
}
export default Guide;