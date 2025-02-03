import { Hero } from '../types';
import './HeroList.css';

interface HeroListProps {
  heroes: Hero[];
}

function HeroList({ heroes }: HeroListProps) {
  return (
    <div className="hero-list">
      <h2>Hero List</h2>
      <table>
        <thead>
          <tr>
            <th>Superhero Name</th>
            <th>Superpower</th>
            <th>Humility Score</th>
          </tr>
        </thead>
        <tbody>
          {heroes.map((hero) => (
            <tr key={hero.id}>
              <td className="hero-name">{hero.superhero_name}</td>
              <td className="hero-power">{hero.superpower}</td>
              <td className="hero-score">{hero.humility_score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HeroList;