import { FastifyInstance } from "fastify";
import {
  createSuperheroSchema,
  getAllSuperheroesSchema,
} from "../infrastructure/controllers/superheroSchema";
import { container } from "./di";

export default async function registerRoutes(fastify: FastifyInstance) {
  const { superheroController } = container.controllers;

  fastify.post<{ Body: { email: string; password: string } }>(
    "/superhero",
    { schema: createSuperheroSchema },
    (request, reply) => superheroController.createSuperhero(request, reply)
  );
  fastify.get<{}>(
    "/superheroes",
    { schema: getAllSuperheroesSchema },
    (request, reply) => superheroController.getAllSuperheroes(request, reply)
  );
}
