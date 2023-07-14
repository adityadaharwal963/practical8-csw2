import React, { Component } from 'react'
import './Container.css'
export class Container extends Component {
      
  render() {
     
    return (
      <div>
            <div className="mycontent">
            <h1>Greetings</h1>
           <h2> {this.props.name1}</h2>
           <h2> {this.props.name2}</h2>
           <h2> {this.props.name3}</h2>
           <h2> {this.props.name4}</h2>
           <h2> {this.props.name5}</h2>

           <p>{this.props.describe}</p>
</div>
      </div>
    )
  }
}

export default Container