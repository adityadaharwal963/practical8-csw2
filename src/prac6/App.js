
import './App.css';
import IsloggedIn from './IsloggedIn';
import Goal from './Goal';
import Logicland from './Logicland';
import Garage from './Garage';
import Listing from './Listing';
function App() {
  

  return (
    <div className="App-p6">
      <br></br>
     <div className="my-div">   <Goal isGoal={false}/></div>
      <div className="my-div"><Garage cars={3}/></div>
      {/*<Ternory/>*/}
      <div className="my-div">
        <Listing {...prop1}/>
        </div>
      <div className="my-div">  <Logicland/></div>
      <div className="my-div"> <IsloggedIn islogdIn={false}/></div>
    </div>
  );
}

export default App;
const prop1={
  host:"mario",
  Experience:"walking in woods",
  location:"norway",
  price:"10000"

}