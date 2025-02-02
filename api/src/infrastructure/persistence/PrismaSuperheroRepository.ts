import { Prisma, PrismaClient } from "@prisma/client";
import { Superhero } from "../../domain/Superhero";
import { SuperheroRepository } from "../../domain/SuperheroRepository";

export class PrismaSuperheroRepository implements SuperheroRepository {
  constructor(private prisma: PrismaClient) {}

  async create(superhero: Superhero): Promise<Superhero> {
    try {
      const createdsuperhero = await this.prisma.superhero.create({
        data: {
          superhero_name: superhero.superhero_name,
          superpower: superhero.superpower,
          humility_score: superhero.humility_score,
        },
      });
      return new Superhero(
        createdsuperhero.id,
        createdsuperhero.superhero_name,
        createdsuperhero.superpower,
        createdsuperhero.humility_score,
        createdsuperhero.createdAt
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new Error(
            "superhero already exists with the same unique identifier"
          );
        }
      }
      throw error;
    }
  }

  async findAllHeroes(): Promise<Superhero[]> {
    try {
      const heroes = await this.prisma.superhero.findMany();
      return heroes.map(
        (hero) =>
          new Superhero(
            hero.id,
            hero.superhero_name,
            hero.superpower,
            hero.humility_score,
            hero.createdAt
          )
      );
    } catch (error) {
      throw error;
    }
  }
}
