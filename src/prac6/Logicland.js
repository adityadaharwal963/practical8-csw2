import React from 'react'

function Logicland() {
    const isloggedIn=true;
 
  return (
    <div>
      {isloggedIn && <p>Welcome , User O/p Logical And!</p>}
      {/*ternory operator */}
      {isloggedIn? <h1>Welcome</h1>:<p>please log in to continue</p>}
    </div>
  )
}

export default Logicland
