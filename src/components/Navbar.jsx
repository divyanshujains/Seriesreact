import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-22 bg-pink-300 flex justify-around items-center text-2xl'>
        <Link to="/" >Home</Link>
        {/* <Link to="/allquote" >allquote</Link> */}
         {/* <Link to="/Liked" >Liked</Link> */}
    </div>
  )
}

export default Navbar