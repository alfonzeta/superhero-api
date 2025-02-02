import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

interface Superhero {
  id: number;
  superhero_name: string;
  superpower: string;
  humility_score: number;
}

const server = fastify({
  logger: true,
});
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

// Route to add a superhero
server.post("/superheroes", async (request, reply) => {
  const { superhero_name, superpower, humility_score } = request.body as {
    superhero_name: string;
    superpower: string;
    humility_score: number;
  };

  if (!superhero_name || !superpower || humility_score === undefined) {
    return reply.status(400).send({ error: "Missing required fields" });
  }

  const newHero = await prisma.superhero.create({
    data: {
      superhero_name,
      superpower,
      humility_score,
    },
  });

  return reply.status(201).send(newHero);
});

// Route to get superheroes sorted by humilityScore (descending)
server.get("/superheroes", async (_request, reply) => {
  const sortedHeroes = await prisma.superhero.findMany({
    orderBy: {
      humility_score: "desc",
    },
  });
  return reply.send(sortedHeroes);
});

server.listen({ port: 8080, host: "0.0.0.0" }, async (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
  try {
    await prisma.$connect();
    console.log("Connected to database");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
});

// Gracefully disconnect Prisma when the server is shutting down
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
