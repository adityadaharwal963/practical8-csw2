import React from 'react'
import './Nav3.css'

import menu from './download.png'

export default function Nav3() {
  return (
    <div>
      <div className='mynav'>
        <div className="nav">

          <div className="who">
            Home
          </div>
          <div className="Product"  >
            <span>Product</span>
          </div>
          <div className="when-how">Security</div>
         
          <div className="allegation">Projects</div>

          <div className="drop">
            <img src={menu}></img>
          </div>
        </div>
      </div>
      <br />
    </div>

  )
}





