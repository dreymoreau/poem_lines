import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Nav = () => {
    const [updateNav, setUpdateNav] = useState(true)
    
    const linkTo = (e) => {
        // passing in the function to switch it to false when the About li is clicked
        // redirect to About page and hide navbar
        setUpdateNav(false)
    }
  return (
    <div>
        <nav>
            <ul>
                <li><h1>4 Line Life</h1></li>
               
                {updateNav && <li>
                <Link to="/about" onClick={linkTo}>
                    <p>About</p>
                </Link>
                </li>}
            </ul>
        </nav>
    </div>
  )
}

export default Nav