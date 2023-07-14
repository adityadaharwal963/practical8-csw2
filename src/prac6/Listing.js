import React from 'react'

export default function Listing(props) {
  return (
    <div>
      <h1>Host:{props.host}</h1>
      <h1>Experience:{props.Experience}</h1>
      <h1>location:{props.location}</h1>
      <h1>price:{props.price}</h1>
    </div>
  )
}