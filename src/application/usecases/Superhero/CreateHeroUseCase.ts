import { create } from "domain";
import { Superhero } from "../../../domain/Superhero";
import { SuperheroRepository } from "../../../domain/SuperheroRepository";

class CreateHeroUseCase {
  constructor(private readonly SuperheroRepository: SuperheroRepository) {}

  public async execute(
    superhero_name: string,
    superpower: string,
    humility_score: number
  ): Promise<Superhero | null> {
    if (!superhero_name.trim()) {
      throw new Error("superhero_name cannot be empty");
    }
    if (superpower.trim().length < 10) {
      throw new Error("superpower must be at least 10 characters long");
    }
    if (humility_score < 0 || humility_score > 100) {
      throw new Error("humility_score must be between 0 and 100");
    }

    try {
      const newSuperhero = new Superhero(
        null,
        superhero_name,
        superpower,
        humility_score
      );
      const createdSuperhero = await this.SuperheroRepository.create(
        newSuperhero
      );

      return createdSuperhero;
    } catch (error) {
      console.error("Error creating superhero:", error);
      throw new Error("Internal Server Error");
    }
  }
}

export { CreateHeroUseCase };
