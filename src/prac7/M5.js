import React, { Component } from 'react'
export default class M5 extends Component {
 constructor(props) {
 super(props)
 this.state = {
   favoritecolor:"yellow"
}
}
shouldComponentUpdate() {
//return false;
return true;
}

 changeColor = () => {
      document.getElementById('m5').style="color:white; background-color:hwb(215 0% 0%)";
  this.setState({favoritecolor: "blue"});  
    }
      render() {
        return (
      <div className='m' id='m5'>
      <h2>My Favorite Color is {this.state.favoritecolor}</h2>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
     );
 }
}