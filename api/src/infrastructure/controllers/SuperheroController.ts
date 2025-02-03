import { FastifyReply, FastifyRequest } from "fastify";
import { CreateHeroUseCase } from "../../application/usecases/Superhero/CreateHeroUseCase";
import { GetAllHeroesUseCase } from "../../application/usecases/Superhero/GetAllHeroesUseCase";
import { DeleteHeroUseCase } from "../../application/usecases/Superhero/DeleteHeroUseCase"; // Import the DeleteHeroUseCase

export class SuperheroController {
  constructor(
    private readonly createHeroUseCase: CreateHeroUseCase,
    private readonly getAllHeroesUseCase: GetAllHeroesUseCase,
    private readonly deleteHeroUseCase: DeleteHeroUseCase // Add the DeleteHeroUseCase
  ) {}

  async createSuperhero(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    try {
      const { superhero_name, superpower, humility_score } = request.body as {
        superhero_name: string;
        superpower: string;
        humility_score: number;
      };

      const createdSuperhero = await this.createHeroUseCase.execute(
        superhero_name,
        superpower,
        humility_score
      );
      reply.code(201).send(createdSuperhero);
    } catch (error) {
      if (error instanceof Error) {
        reply
          .code(500)
          .send({ error: "Internal Server Error", message: error.message });
      } else {
        reply.code(500).send({
          error: "Internal Server Error",
          message: "An unknown error occurred",
        });
      }
    }
  }

  async getAllSuperheroes(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    try {
      const superheroes = await this.getAllHeroesUseCase.execute();
      reply.code(200).send(superheroes);
    } catch (error) {
      if (error instanceof Error) {
        reply
          .code(500)
          .send({ error: "Internal Server Error", message: error.message });
      } else {
        reply.code(500).send({
          error: "Internal Server Error",
          message: "An unknown error occurred",
        });
      }
    }
  }

  async deleteSuperhero(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    try {
      const { id } = request.params as { id: string };
      const heroId = parseInt(id, 10);

      if (isNaN(heroId)) {
        reply
          .code(400)
          .send({ error: "Invalid ID", message: "ID must be a number2" });
        return;
      }

      await this.deleteHeroUseCase.execute(heroId);
      reply.code(204).send();
    } catch (error) {
      if (error instanceof Error) {
        reply
          .code(500)
          .send({ error: "Internal Server Error", message: error.message });
      } else {
        reply.code(500).send({
          error: "Internal Server Error",
          message: "An unknown error occurred",
        });
      }
    }
  }
}
