import { useState } from 'react';
import { Hero } from '../types';
import './HeroForm.css';

interface HeroFormProps {
  addHero: (hero: Hero) => void;
}

function HeroForm({ addHero }: HeroFormProps) {
  const [superhero_name, setSuperheroName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humility_score, setHumilityScore] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addHero({ superhero_name, superpower, humility_score });
    setSuperheroName('');
    setSuperpower('');
    setHumilityScore(0);
  };

  return (
    <form className="hero-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Superhero Name:</label>
        <input
          type="text"
          value={superhero_name}
          onChange={(e) => setSuperheroName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Superpower:</label>
        <input
          type="text"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Humility Score:</label>
        <input
          type="number"
          value={humility_score}
          onChange={(e) => setHumilityScore(Number(e.target.value))}
          required
        />
      </div>
      <button type="submit" className="submit-button">Add Hero</button>
    </form>
  );
}

export default HeroForm;