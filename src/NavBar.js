import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
    <div className='navbar'
    style={{
        backgroundColor: 'black',
    }}>
        <nav>
            <ul>
                <li>< NavLink end to='/'>Home</NavLink></li>
                <li><NavLink to='/guide'>Guide</NavLink></li>
                <li><NavLink to='/quiz'>Quiz</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;