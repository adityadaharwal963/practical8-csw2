import React, { Component } from 'react'
import photo from './maxresdefault.jpg'
import './container.css'

export class Container extends Component {
  render() {
      return (
            <div>
              <div className="content" >
                
                <div className="text">
                  <Info />
                </div>
                <div className="img">
                  <img src={photo} />
                  photo
                </div>
              </div>
            </div>
          )
  }
}

export default Container

function Info() {
      return (
        <div>
          <Heading />
          <p>Why I killed Gandhi is a biographical drama movie about the assassination of Mahatma Gandhi. This is a short film which runs for 45 minutes. This movie shows the reason that Nathuram Godse provided for assassinating Gandhi during his trials in court. </p>
    
        </div>
      )
    }
    
    function Heading() {
      return (
        <>
          <div className="Heading">
            <p></p>
            <br />
          </div>
    
        </>
      )
    }