import { useState } from 'react';
import './App.css';
import placeholderImage from './placeholder.jpg';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return(
    <div className="App">
      <nav className="navbar">
      <ul>
       <li>Domů</li>
       <li>O nás</li>
       <li>Kontakty</li>
      </ul>
      </nav>
      <section className="main-section">
        <div className="left-section">
          <h1>Kouzlo Tichého Jezera</h1>
          <p>Tiché jezero, ukryté v srdci přírody, <br>
          </br>nabízí klidné útočiště pro každého, <br>
          </br>kdo touží po odpočinku. <br>
          </br>Jeho průzračná voda a malebné okolí <br>
          </br>vytvářejí ideální místo pro relaxaci<br>
          </br> a objevování krásného kraje. <br>
          </br>Pro návštěvu se prosím přihlaste.</p>
          <div className="input-container">
          <input 
              type="text" 
              placeholder="Sem zadejte své udáje"
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={handleSubmit}>Enter</button>
          </div>
          {submittedValue && (
            <p className="output-text">Byl jsi přihlášen: {submittedValue}</p>
          )}
        </div>
        <div className="right-section">
        <img src={placeholderImage} alt="d" />
        </div>
      </section>
    </div>  
  );

};


export default App;
