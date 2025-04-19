import React from 'react'
import { useLocation } from 'react-router-dom'

const Allquote = () => {
  
  const location =  useLocation()
  const array = location.state?.data || []
  console.log(array);
  

  return (
    <div>
      
      {array.map(function(elem , id){
       return  <div key={id} className="max-w-xl mx-auto my-6 p-6 rounded-2xl shadow-lg border bg-white text-black">
             <p className="text-xl italic text-center">“{elem.quote}”</p>
                   <p className="text-right mt-4 font-semibold text-gray-600">— {elem.Author}</p>
                    <button className="mt-4 flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-red-500 transition-colors duration-200 rounded-lg">
                       
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Like
                    </button>
                    </div>


      })}
     

    </div>
  )
}

export default Allquote
