import React, { useEffect, useState } from 'react'
import './footer.css'







export default function Footer() {
      const [count,setCount]=useState(0);

      
  return (<>
    <div className='foot' >People visted till now -- 
    <button onClick={() =>{setCount(count + 1)}}> |  {count}  |  </button></div>
    </>
  )
}

 
