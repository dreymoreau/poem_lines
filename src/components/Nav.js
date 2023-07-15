import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Nav = () => {
    
    const [updateNav, setUpdateNav] = useState(true)
    const [removeGetData, setRemoveGetData] = useState(true)
    
    const linkTo = (e) => {
        // passing in the function to switch it to false when the About li is clicked
        // redirect to About page and hide navbar
        setUpdateNav(false)
        setRemoveGetData(false)
    }
    
  return (
    <div>
        <header className='flex flex-row justify-center bg-slate-400 border-b-2 border-black border-solid'>
                <h1 className="text-4xl p-4">Poem Generator</h1>
               
                {updateNav && 
                <Link to="/about" onClick={linkTo}>
                    <p className='ml-4 mt-7'>About</p>
                </Link>}
        </header>
    </div>
  )
}

export default Nav