import { Superhero } from "../../../domain/Superhero";
import { SuperheroRepository } from "../../../domain/SuperheroRepository";

class GetAllHeroesUseCase {
  constructor(private readonly SuperheroRepository: SuperheroRepository) {}

  public async execute(): Promise<Superhero[]> {
    try {
      return await this.SuperheroRepository.findAllHeroes();
    } catch (error) {
      console.error("Error retrieving heroes:", error);
      throw new Error("Internal Server Error");
    }
  }
}

export { GetAllHeroesUseCase };
