import logo from './logo2.svg';
import './App.css';
import Nav3 from './Nav3';
import Container from './Container';
import Likes from './Likes';
function App() {
  return (
    <div className="App-p4">
      <Nav3/><br/>
      <header className="App-header">
        <div className="Appimg">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
         Greeting Everyone from Aditya Daharwal 
        </p>
      </header>
      <div className="box">
      <Container name1='Aditya Pande' describe='Experienced Chief Financial Officer with a demonstrated history of working in the Healthcare, manufacturing'/>
      <Container name2='Suyog Parkhi' describe='web development || competative programming || 2⭐️ codechef || Azure certified (AI-900)'/>
      <Container name3='Manan' describe='Manan is a analytical and detail-oriented team player with a focus on creative problem solving, innovation, cross functional team work, customer centric solutions/experience and leadership.'/>
      <Container name4= 'Mihir' describe='A Congress Man Loyal  to His Party in Any Condition'/>

      </div>
<Likes/>
    </div>
  );
}

export default App;
