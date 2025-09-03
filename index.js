import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', padding: '50px' }}>
      <h1>🌐 Welcome to Chaitanya AI (Phase 1 - Private Beta)</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br /><br />
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br /><br />
          <button type="submit">Start</button>
        </form>
      ) : (
        <div>
          <h2>Hello {gender === 'female' ? 'Ms.' : 'Mr.'} {name} 👋</h2>
          <p>Chaitanya AI is ready to assist you 🚀</p>
        </div>
      )}
    </div>
  );
}