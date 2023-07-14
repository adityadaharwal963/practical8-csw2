import React, { Component } from 'react'
import  deadofgandhi  from "./deadofgandhi.mp4";
import './videobox.css'


export default class videobox extends Component {
  render() {
    return (
      <div>
<div className='videobox'>
      <video src={deadofgandhi} autoPlay ></video>

</div>
      </div>
    )
  }
}

 
