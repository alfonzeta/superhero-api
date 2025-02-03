import { SuperheroRepository } from "../../../domain/SuperheroRepository";

class DeleteHeroUseCase {
  constructor(private readonly superheroRepository: SuperheroRepository) {}

  public async execute(id: number): Promise<void> {
    try {
      await this.superheroRepository.delete(id);
    } catch (error) {
      console.error("Error deleting hero:", error);
      throw new Error("Internal Server Error");
    }
  }
}

export { DeleteHeroUseCase };
