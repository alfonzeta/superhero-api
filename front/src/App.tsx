import './App.css';
import HeroForm from './components/HeroForm';
import HeroList from './components/HeroList';
import { Hero } from './types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

function App() {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = async () => {
    try {
      const response = await fetch('http://localhost:8080/superheroes');
      const data = await response.json();
      setHeroes(data);
    } catch (error) {
      console.error('Error fetching heroes:', error);
    }
  };

  const addHero = async (hero: Hero) => {
    try {
      const response = await fetch('http://localhost:8080/superhero', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hero),
      });
  
      const data = await response.json(); // Parse response JSON
  
      if (response.ok) {
        setHeroes([...heroes, data]);
        toast.success('Hero added successfully!');
      } else {
        toast.error(data.message || 'Failed to add hero.'); // Display API error message
      }
    } catch (error) {
      console.error('Error adding hero:', error);
      toast.error('Error adding hero.');
    }
  };

  const deleteHero = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8080/superhero/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setHeroes(heroes.filter((hero) => hero.id !== id));
        toast.success('Hero deleted successfully!');
      } else {
        toast.error('Failed to delete hero.');
      }
    } catch (error) {
      console.error('Error deleting hero:', error);
      toast.error('Error deleting hero.');
    }
  };

  return (
    <div className="App">
      <h1>Hero Management</h1>
      <HeroForm addHero={addHero} />
      <HeroList heroes={heroes} deleteHero={deleteHero} />
      <ToastContainer />
    </div>
  );
}

export default App;