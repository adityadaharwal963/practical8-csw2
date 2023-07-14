import React, { Component } from 'react'
export default class M1 extends Component {
constructor(props) {
super(props)
this.state = {
favoritecolor:"red"

}
}
render() {
return (
<div className="m" id="m1" >
<h2>My Favorite Color is {this.state.favoritecolor}</h2>
</div>
)
}
}