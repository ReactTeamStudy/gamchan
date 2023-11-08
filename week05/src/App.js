import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (e) => {
    setInput((prevInput) => prevInput + e.target.value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
      <div className="App">
        <div>
          <input type="text" value={input} readOnly />
          <input type="text" value={result} readOnly />
        </div>
        <div>
          <button onClick={() => setInput(input.slice(0, -1))}>CE</button>
          <button onClick={clearInput}>C</button>
        </div>
        <div>
          <button onClick={handleInput} value="1">1</button>
          <button onClick={handleInput} value="2">2</button>
          <button onClick={handleInput} value="3">3</button>
          <button onClick={handleInput} value="+">+</button>
        </div>
        <div>
          <button onClick={handleInput} value="4">4</button>
          <button onClick={handleInput} value="5">5</button>
          <button onClick={handleInput} value="6">6</button>
          <button onClick={handleInput} value="-">-</button>
        </div>
        <div>
          <button onClick={handleInput} value="7">7</button>
          <button onClick={handleInput} value="8">8</button>
          <button onClick={handleInput} value="9">9</button>
          <button onClick={handleInput} value="*">*</button>
        </div>
        <div>
          <button onClick={calculate}>=</button>
          <button onClick={handleInput} value="0">0</button>
          <button onClick={handleInput} value=".">.</button>
          <button onClick={handleInput} value="/">/</button>
        </div>
      </div>
  );
}

export default App;
