import React, { Component } from 'react'
export default class M6 extends Component {
      constructor(props) {
            super(props)
            this.state = {
                  favoritecolor: "yellow"
            }
      }
      componentDidMount() {
            setTimeout(() => {
                  this.setState({ favoritecolor: "blue" })
                  document.getElementById("m6").style="background-color:#ff5e00"
            }, 1000)
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {
            document.getElementById("div1").innerHTML =
                  "Before the update, the favorite was " + prevState.favoritecolor;
      }
      componentDidUpdate() {
            document.getElementById("div2").innerHTML =
                  "The updated favorite is " + this.state.favoritecolor;
      }
      render() {
            return (
                  <div className='m' id='m6'>
                        <h2>My Favorite Color is {this.state.favoritecolor}</h2>
                        <div id="div1"></div>
                        <div id="div2"></div>
                  </div>
            );
      }
}