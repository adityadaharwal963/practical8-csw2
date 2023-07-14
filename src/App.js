import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Practical1 from "./prac1/HelloWorld"
import Practical2 from "./prac2/App"
import Practical3 from "./prac3/App"
import Practical4 from "./prac4/App"
import Practical5 from "./prac5/ScoreCard"
import Practical6 from "./prac6/App"
import Practical7 from "./prac7/App"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <div className='vertical-nav'>
          <ul>
            <li><Link to="/Home" className='active'>Home</Link></li>
            <li><Link to="/Practical1" className='bol'>Practical1</Link></li>
            <li><Link to="/Practical2"className='bol'>Practical2</Link></li>
            <li><Link to="/Practical3"className='bol'>Practical3</Link></li>
            <li><Link to="/Practical4"className='bol'>Practical4</Link></li>
            <li><Link to="/Practical5"className='bol'>Practical5</Link></li>
            <li><Link to="/Practical6"className='bol'>Practical6</Link></li>
            <li><Link to="/Practical7"className='bol'>Practical7</Link></li>

          </ul>

          <div className='display-screen'>
          <Routes>
            <Route exact path='/Home' element={<Home/>}></Route>
            <Route exact path='/Practical1' element={<Practical1/>}></Route>
            <Route exact path='/Practical2' element={<Practical2/>}></Route>
            <Route exact path='/Practical3' element={<Practical3/>}></Route>
            <Route exact path='/Practical4' element={<Practical4/>}></Route>
            <Route exact path='/Practical5' element={<Practical5/>}></Route>
            <Route exact path='/Practical6' element={<Practical6/>}></Route>
            <Route exact path='/Practical7' element={<Practical7/>}></Route>
            
          </Routes>
          </div>
        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;
