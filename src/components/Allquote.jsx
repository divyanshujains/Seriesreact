import React from 'react'

const Allquote = ({data}) => {
    const all = data
   

  return (
    <div className="flex flex-col items-center space-y-4 mt-8">
    {all.map((elem, idx) => ( 
        
        <div key={idx} className="w-2/3 p-4 bg-red-100 rounded shadow">
        <h1 className="text-xl font-bold text-red-800">{elem.quote}</h1>
        <p className="text-right text-sm italic">— {elem.author}</p>
      </div>
    ))}
  </div>
  )
}

export default Allquote