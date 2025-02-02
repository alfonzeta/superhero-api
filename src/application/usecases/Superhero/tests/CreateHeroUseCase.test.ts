import { CreateHeroUseCase } from "../CreateHeroUseCase";
import { SuperheroRepository } from "../../../../domain/SuperheroRepository";
import { Superhero } from "../../../../domain/Superhero";

describe("CreateHeroUseCase", () => {
  let superheroRepository: SuperheroRepository;
  let createHeroUseCase: CreateHeroUseCase;

  beforeEach(() => {
    superheroRepository = {
      create: jest.fn(),
    } as unknown as SuperheroRepository;
    createHeroUseCase = new CreateHeroUseCase(superheroRepository);
  });

  it("should throw an error if the superhero_name is empty", async () => {
    await expect(
      createHeroUseCase.execute("", "Valid superpower", 50)
    ).rejects.toThrow("superhero_name cannot be empty");
  });

  it("should throw an error if the superpower is less than 10 characters", async () => {
    await expect(
      createHeroUseCase.execute("Valid Name", "Short", 50)
    ).rejects.toThrow("superpower must be at least 10 characters long");
  });

  it("should throw an error if the humility_score is out of range", async () => {
    await expect(
      createHeroUseCase.execute("Valid Name", "Valid superpower", -1)
    ).rejects.toThrow("humility_score must be between 0 and 10");

    await expect(
      createHeroUseCase.execute("Valid Name", "Valid superpower", 11)
    ).rejects.toThrow("humility_score must be between 0 and 10");
  });

  it("should create a superhero successfully", async () => {
    const newSuperhero = new Superhero(
      null,
      "Valid Name",
      "Valid superpower",
      8
    );
    const createdSuperhero = new Superhero(
      1,
      "Valid Name",
      "Valid superpower",
      8,
      new Date()
    );
    (superheroRepository.create as jest.Mock).mockResolvedValue(
      createdSuperhero
    );

    const result = await createHeroUseCase.execute(
      "Valid Name",
      "Valid superpower",
      8
    );

    expect(result).toEqual(createdSuperhero);
    expect(superheroRepository.create).toHaveBeenCalledWith(
      expect.objectContaining({
        superhero_name: "Valid Name",
        superpower: "Valid superpower",
        humility_score: 8,
      })
    );
  });

  it("should handle errors during superhero creation", async () => {
    (superheroRepository.create as jest.Mock).mockRejectedValue(
      new Error("DB error")
    );

    await expect(
      createHeroUseCase.execute("Valid Name", "Valid superpower", 7)
    ).rejects.toThrow("Internal Server Error");
  });
});
