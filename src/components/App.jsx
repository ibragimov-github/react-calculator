import React from 'react';
import './App.scss'
import { useState } from 'react';

function App(props) {
  const [value, setValue] = useState('');
  const clearButton = () => {setValue('');}
  const buttonClick = (e) => {
    setValue(value + e.target.innerText)
  }
  const calc = () => {
    setValue(eval(value))
  }
  const deleteValue = () => {
    setValue(value.substring(0, value.length -1))
  }
  return (
    <div className='container'>
      <div className="calc-elem">
        <input value={value} disabled type="text" className="area" />
      </div>
      <div onClick={clearButton} className="calc-elem">clear</div>
      <div onClick={deleteValue} className="calc-elem">←</div>
      <div onClick={buttonClick} className="calc-elem active">*</div>
      <div onClick={buttonClick} className="calc-elem">7</div>
      <div onClick={buttonClick} className="calc-elem">8</div>
      <div onClick={buttonClick} className="calc-elem">9</div>
      <div onClick={buttonClick} className="calc-elem active">/</div>
      <div onClick={buttonClick} className="calc-elem">4</div>
      <div onClick={buttonClick} className="calc-elem">5</div>
      <div onClick={buttonClick} className="calc-elem">6</div>
      <div onClick={buttonClick} className="calc-elem active">-</div>
      <div onClick={buttonClick} className="calc-elem">1</div>
      <div onClick={buttonClick} className="calc-elem">2</div>
      <div onClick={buttonClick} className="calc-elem">3</div>
      <div onClick={buttonClick} className="calc-elem active">+</div>
      <div onClick={buttonClick} className="calc-elem">0</div>
      <div onClick={calc} className="calc-elem active">=</div>


    </div>
  );
}

export default App;