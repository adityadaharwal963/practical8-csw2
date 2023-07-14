import React, { Component } from 'react'
export default class M5 extends Component {
constructor(props) {
  super(props)
  this.state = {
       favoritecolor:"yellow"
  }
 }
 static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol}
     }
 
changeColor = () => {
     document.getElementById('m4').style="background-color:gray";
      this.setState({favoritecolor: "blue"});
      }
      render() {
      return (
      <div className='m' id='m4'>
      <h2 >My Favorite Color is {this.state.favoritecolor}</h2>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
      );
      }
      }