
import "./Likes.css"
import React, { useState } from 'react';

export default function Likes() {
 const [count, setCount] = useState(0);
 return (
  <div className='like'>
  <button onClick={() => setCount(count + 1)}><h1>{count} Likes </h1></button>
  
  </div>
 );
}


