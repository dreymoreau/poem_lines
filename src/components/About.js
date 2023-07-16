import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom'
import logo from '../assets/cohere-logo.svg'

const About = () => {

  return (
    <div>
      <header className='flex flex-row justify-center bg-slate-400 border-b-2 shadow-md border-black border-solid'>
                <h1 className="text-4xl p-4"> About Poem Generator</h1>
       </header>
       <div className='flex flex-row justify-center'>
       <h2 className='p-4 text-2xl'>Powered by:</h2> 
       <img src={logo} alt='cohere logo' className="mt-2"/>
       </div>

       <p>Cohere empowers every developer and enterprise to build amazing products and capture true business value with language AI.</p>
       <Link to="/">
                    <p className='ml-4 mt-7'>Home</p>
        </Link>
     </div>
  )
}

export default About