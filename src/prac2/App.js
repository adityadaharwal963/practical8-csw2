import logo from './logo.svg';
import ac from './achievement.png';
import './App.css';

function App() {
  var a=10;
  var b=3;
  var c=6;
  return (<>
    <div className="App2">
      <header className="App-header2">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Aditya Daharwal's Portfolio</h1>
      </header>
    </div>
    <div><center>
      <p>Hey,Guys!!</p>
      <p>I am Aditya Daharwal currently pursuing Btech at RCOEM nagpur in CSE core Branch.</p>
      <p>I am a Tech enthusiastic and explore</p>
      <table>
        <tr>
          <th>
            <h2> Programming skills </h2>
          </th>
          <th>- - | - -</th>
          <th>
            <h2>Other Interest</h2>
          </th>
        </tr>
        <tr>
          <td>C Programming</td>
          <td></td>
          <td>Baseketball</td>
        </tr>
        <tr>
          <td>Java</td>
          <td></td>
          <td>Machine Learnig</td>
        </tr>
        <tr>
          <td>HTML</td>
          <td></td>
          <td>Arctifical Intelligence </td>
        </tr>
        <tr>
          <td>Javascript</td>
          <td></td>
          <td>Enterperneurship</td>
        </tr>
      </table>

      <br></br>
      <h1>Achievements</h1>
      <div className="ac-img">
        <img src={ac}></img>
      </div>
      <table>
        <tr>
          <td>JEE Mains</td>
          <td>92.1 %tile</td>
        </tr>

        <tr>
          <td>MHTCET</td>
          <td>97.4</td>
        </tr>

        <tr>
          <td>Code blazz comp</td>
          <td>3 position</td>
        </tr>
        <tr>
          <td>1st SEM cgpa</td>
          <td>9.33</td>
        </tr>
      </table>
   <div className="App-space"></div>
<div className="App-arth">
<h1>Arithmathic Operations</h1>
</div>
<div>
  <p>Variable a={a} and b={b}</p>
  <p>addition of Variable: {a+b}</p>
  <p> Subtraction of Variable: {a-b}</p>
  <p> Multiplication of Variable: {a*b}</p>
  <p> Division of Variable: {a/b}</p>
  <p> Remainder of Variable: {a%b}</p>
  <p> a to power b: {a^b}</p>
</div>
<div className="App-web">
<fieldset style={{ borderRadius: 20, borderColor: "hwb(hue white black)" }}>
  <legend>
    <h1>Registration form</h1>
  </legend>
  <h2>
    <form >
      <label htmlFor="fn">First Name:</label>
      <input type="text" name="first name" id="fn" title="abcd" required="" />
      <br />
      <br />
      <label htmlFor="ln"> Last Name: </label>
      <input type="text" name="last name" id="ln" title="xyz" required="" />
      <br />
      <br />
      <label htmlFor="email">Email id: </label>
      <input type="email" name="email" id="email" required="" />
      <br />
      <br />
      <label htmlFor="mno.">Mobile Number:</label>
      <input type="number" name="m no." id="mno." required="" />
      <br />
      <br />
      <input type="submit" defaultValue="Sign up" name="sign_up" />
    </form>
  </h2>
</fieldset>

</div>
<div className="App-space"></div>
</center>
    </div>
  </>
  );
}

export default App;
