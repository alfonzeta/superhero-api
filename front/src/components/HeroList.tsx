import { Hero } from '../types';
import './HeroList.css';

interface HeroListProps {
  heroes: Hero[];
  deleteHero: (id: number) => void;
}

function HeroList({ heroes, deleteHero }: HeroListProps) {
  return (
    <div className="hero-list">
      <h2>Hero List</h2>
      <table>
        <thead>
          <tr>
            <th>Superhero Name</th>
            <th>Superpower</th>
            <th>Humility Score</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {heroes.map((hero) => (
            <tr key={hero.id}>
              <td className="hero-name">{hero.superhero_name}</td>
              <td className="hero-power">{hero.superpower}</td>
              <td className="hero-score">{hero.humility_score}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => deleteHero(hero.id!)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HeroList;