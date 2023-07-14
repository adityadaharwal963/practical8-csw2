import React, { useState } from 'react'
import "./ScoreCard.css"
export default function ScoreCard() {

     const change1 = (event) => {
          setText1(event.target.value);
          }
          const change2 = (event) => {
          setText2(event.target.value);
          }
          const change3 = (event) => {
          setText3(event.target.value);
          }
          const change4 = (event) => {
          setText4(event.target.value);
          }
          const calculate=()=>
          {
          let tot=(text1*1+1*text2+text3*1+text4*1)*1;
          let per=(tot/4.0);
          setTot(tot);
          setPer(per+"%");
          }
          const [text1,setText1]=useState();
          const [text2,setText2]=useState();
          const [text3,setText3]=useState();
          const [text4,setText4]=useState();
          const [tot,setTot]=useState(0);
          const [per,setPer]=useState(0);

          return (
               <div className="App-p5">
               <div className='card1'>
<center>
     <div className="title1">Student score calculation system</div>
               <table border="2">
               <tr>
               <th className="name">Name :</th>
               <th className='back'><input type="text" className='name' placeholder="Enter 
               your name"></input></th>
               </tr>
               <tr>
               <th className='name'>Section : </th>
               <th className='back'> <input type="text" className='name' placeholder="Enter 
               section"></input></th>
               </tr>
               <tr>
               <th colspan="4" className='sec'>Enter the marks of subjects</th>
               </tr>
               <tr>
               <th className='entry'>1.CWS :</th>
               <th colspan="3" className='back' ><input type="text" placeholder="Enter cws 
               marks" value={text1} onChange={change1} className='entry'></input></th>
               </tr>
               <tr>
               <th className='entry'>2.OOPS :</th>
               <th colspan="3" className='back'><input type="text" className='entry'
               placeholder="Enter oops marks" value={text2} onChange={change2}></input></th>
               </tr>
               <tr>
               <th className='entry'>3.Maths :</th>
               <th colspan="3" className='back'><input type="text" className='entry'
               placeholder="Enter maths marks" value={text3} onChange={change3}></input></th>
               </tr>
               <tr>
               <th className='entry'>4.Physics :</th>
               <th colspan="3" className='back'><input type="text" className='entry'
               placeholder="Enter physics marks" value={text4} onChange={change4}></input></th>
               </tr>
               <tr>
               <th colspan="4" className='back1'><button onClick={calculate}
               className='btn'>Calculate Score</button></th>
               </tr>
               <tr>
               <th className='name'> Total Marks :</th>
               <th colspan="3" className='back'><input type="text" value={tot} disabled
               className='name'></input></th>
               </tr>
               <tr>
               <th className='name'>Percentage:</th>
               <th colspan="3" className='back'><input type="text" value={per} disabled 
               className='name'></input></th>
               </tr>
               </table>
               </center>
               </div>
 </div>
  )
}
