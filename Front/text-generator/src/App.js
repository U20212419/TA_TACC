import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [seedText, setSeedText] = useState('');
  const [nextWords, setNextWords] = useState(30);
  const [generatedText, setGeneratedText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://1c48-34-141-183-204.ngrok-free.app/generate_text', {
        seed_text: seedText,
        next_words: nextWords,
      });
      setGeneratedText(response.data.generated_text);
    } catch (error) {
      console.error('Error al generar texto:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generador de Texto</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Texto Inicial:
              <input
                type="text"
                value={seedText}
                onChange={(e) => setSeedText(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Número de Palabras a Generar:
              <input
                type="number"
                value={nextWords}
                onChange={(e) => setNextWords(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Generar Texto</button>
        </form>
        {generatedText && (
          <div className="result">
            <h2>Texto Generado</h2>
            <p>{generatedText}</p>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
