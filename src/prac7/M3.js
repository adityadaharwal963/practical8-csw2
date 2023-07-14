import React, { Component } from 'react'
export default class M3 extends Component {
constructor(props) {
super(props)
this.state = {
favoritecolor:"yellow"
}
}
componentDidMount() {
setTimeout(() =>{
this.setState({favoritecolor:"blue"})
document.getElementById('m3').style="color:white; background-color:blue";
}, 1000)
}
render() {
return (
<div  className="m" id="m3">
<h2>My Favorite Color is {this.state.favoritecolor}</h2>
</div>
)
}
}