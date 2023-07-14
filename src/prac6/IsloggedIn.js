
import React from 'react'

const IsloggedIn= ({islogdIn})=>{
 
    if(islogdIn){
        return (<div>Welcome User!</div>)
    }
    else{
        return (<div>please log in</div>)
    }
}

export default IsloggedIn
