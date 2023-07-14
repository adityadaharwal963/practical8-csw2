import React from 'react'

export default function Goal(props) {
  
    const isGoal=props.isGoal;
    if(isGoal)
    {return <MadeGoal/>}
    else{
        return <MissedGoal/>;
    }
}


const MadeGoal = () => {
  return (
    <div>
      <h1>Goal!</h1>
    </div>
  )
}


const MissedGoal =()=>{
    return(
        <h1>MissedGoal</h1>
    )
}

