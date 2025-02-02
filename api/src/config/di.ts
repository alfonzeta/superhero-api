import { PrismaClient } from "@prisma/client";

import { CreateHeroUseCase } from "../application/usecases/Superhero/CreateHeroUseCase";
import { GetAllHeroesUseCase } from "../application/usecases/Superhero/GetAllHeroesUseCase";
import { SuperheroController } from "../infrastructure/controllers/SuperheroController";
import { PrismaSuperheroRepository } from "../infrastructure/persistence/PrismaSuperheroRepository";

// Clients
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

// Repositories
const superheroRepository = new PrismaSuperheroRepository(prisma);

// Use cases
const createHeroUseCase = new CreateHeroUseCase(superheroRepository);
const getAllHeroesUseCase = new GetAllHeroesUseCase(superheroRepository);

// Controllers
const superheroController = new SuperheroController(
  createHeroUseCase,
  getAllHeroesUseCase
);

export const container = {
  prisma,
  repositories: {
    superheroRepository,
  },
  useCases: {
    createHeroUseCase,
    getAllHeroesUseCase,
  },
  controllers: {
    superheroController,
  },
};
