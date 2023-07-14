 import React from 'react'
 
 function Garage(props) {
    const cars =props.cars
   return (
     <div>
       {cars > 0 && <h2>You have {cars} cars in your Garage</h2>}
     </div>
   )
 }
 
 export default Garage
 