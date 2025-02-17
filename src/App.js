import { useState } from 'react';
import Grade from './Grade';
import './App.css';

function App() {
  // State for user input
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [showGrade, setShowGrade] = useState(false);
  const [showForm, setShowForm] = useState(true);  // State to manage form visibility

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowGrade(true);  // Show grade after form submission
    setShowForm(false);  // Hide the form once submitted
  };

  return (
    <div className="App">
      <div className="content">
        <h1>The Grade Checker!</h1>
        
        {showForm && (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name: </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Score: </label>
              <input
                type="number"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                required
                min="0"
                max="100"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}

        {showGrade && (
          <div>
            <h2>Dear {name}, your score is {score}!</h2>
            <p>Your grade is: <Grade score={parseInt(score)} /></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
