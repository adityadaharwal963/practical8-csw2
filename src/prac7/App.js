
import './App.css';

import M1 from "./M1";
import M2 from './M2';
import M3 from './M3';
import M4 from "./M4";
import M5 from "./M5";
import M6 from "./M6";
import M7 from "./M7";
import Book from "./M8_book";
import ErrorBoundary from './ErrorBoundary';
function App() {
  return (
    <div className="App-p7">
      <br/>
     <M1/>
    <M2 favcol='green'/>
    <M3/>
    <M4 favcol='gray'/>
    <M5/>
    <M6/>
    <M7/>
    <ErrorBoundary>
    <Book bookName="Pure React"/>
    </ErrorBoundary>
    <ErrorBoundary>
    <Book bookName=""/>
    </ErrorBoundary>
   <br/>
    </div>
  );
}

export default App;
