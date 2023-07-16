import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom'

const About = () => {

  return (
    <div>
      <header className='flex flex-row justify-center bg-slate-400 border-b-2 border-black border-solid'>
                <h1 className="text-4xl p-4"> About Poem Generator</h1>
       </header>
       <p>Powered by</p>
       <Link to="/">
                    <p className='ml-4 mt-7'>Home</p>
        </Link>
     </div>
  )
}

export default About