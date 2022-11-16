import logo from './logo.svg';
import './App.css';

function App() {
  const createDigits = () =>{
    const digits = [];
    for (let i = 1; i < 10; i++){
      digits.push(
        <button className="button" key={i}>{i}</button>
      )
    }
    return digits;
  }

  return (
  <div className="App">
    <div className="calculator calc">
      <div className="dispaly">
        <span>(0)</span>0
      </div>
      <div className="operators">
        <button className="button">/</button>
        <button className="button">*</button>
        <button className="button">+</button>
        <button className="button">-</button>
        <button className="button">DEL</button>
      </div>
      <div className="digits">
        { createDigits () }
        <div className="button">0</div>
        <div className="button">.</div>
        <div className="button">=</div>
        <div className="button">=</div>
      </div>
    </div>
  </div>




  );  
}

export default App;
