// domain/PostRepository.ts
import { Superhero } from "./Superhero";

export interface SuperheroRepository {
  create(superhero: Superhero): Promise<Superhero>;
  findAllHeroes(): Promise<Superhero[]>;
  delete(id: number): Promise<void>;
}
