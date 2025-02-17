// Form.js
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && score !== '') {
      // Pass the name and score to the parent component via onSubmit
      onSubmit(name, parseInt(score));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Score:</label>
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
  );
};

export default Form;
