import React, { useEffect, useState } from 'react'
import Allquote from './Allquote'
import { useNavigate } from 'react-router-dom'

const Home = () => {
   const navigate = useNavigate()
    const [quote, setquote] = useState("")
    const [allquote, setallquote] = useState([])
    const [Author, setAuthor] = useState("")
    const [ison, setison] = useState(false)
    const [copied, setCopied] = useState(false);  


    const RandomQuote = async () => {
      try {
        const response = await fetch("https://qapi.vercel.app/api/random");
        const data = await response.json();
        setquote(data.quote);
        setAuthor(data.author);
         if (data.quote.length > 0) {
      setallquote(prev => [...prev, { quote: data.quote, Author: data.author }]);
    }
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
     RandomQuote()
 
  }, [])

  
const QuoteChnage = ()=>{
  RandomQuote()
} 

const ThemeHandler = ()=>{
setison(!ison)
}



const copyit = async ()=>{
    const tocopy = quote;
    try {
        await navigator.clipboard.writeText(tocopy)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000);
        
    } catch (err) {
        console.error("Failed to copy:", err);
        
    }
  
}

const seeall = ()=>{
  const arr = allquote
  navigate('/allquote', {state:{data:arr}})
}




  return (
    <div 
    className={` w-full h-screen ${ ison ? "bg-zinc-800 text-white" : "bg-white text-black "} `}> 
    <h1 className='text-3xl text-center' >
      🌟 {quote} 🌟
    </h1>

    <p className = 'text-2xl text-center ' >
      — {Author}
    </p>

    <div className='flex justify-center mt-4'>


    <button 
      onClick={() => { ThemeHandler() }}
      className = ' border border-black p-4  text-2xl text-center  ml-4 mt-4'
       
      >
        🌓 Toggle Theme
      </button>

      <button 
        onClick={() => { QuoteChnage() }}
         className = ' border border-black p-4  text-2xl text-center  ml-4 mt-4 '
      >
        🔁 New quote
      </button>


      <button 
        onClick={() => { copyit() }}
         className ={` border border-black p-4 ${copied? "bg-green-500" : "bg-pink-400"} text-2xl text-center  ml-4 mt-4 `}
      >
        {copied ? "copyied": "copy the code"   }
      </button>



      <button 
         onClick={seeall}
         className ={` border border-black p-4  text-2xl text-center  ml-4 mt-4 `}
      >
       See allquote
      </button>

    
    </div>

 
  
  </div>


  )
}

export default Home