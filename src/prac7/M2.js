import React, { Component } from 'react'
export default class M2 extends Component {
constructor(props) {
super(props)
this.state = {
favoritecolor:"blue"
}
}
static getDerivedStateFromProps(props, state) {
return {favoritecolor: props.favcol}
}

render() {
return (
<div className="m" id="m2">
<h2>My Favorite Color is {this.state.favoritecolor}</h2>
</div>
)
}
}