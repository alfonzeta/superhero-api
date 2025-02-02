import Fastify from "fastify";

const fastify = Fastify({ logger: true });

interface Superhero {
  id: number;
  name: string;
  superpower: string;
  humilityScore: number;
}

let superheroes: Superhero[] = [];

// Route to add a superhero
fastify.post("/superheroes", async (request, reply) => {
  const { name, superpower, humilityScore } = request.body as Superhero;

  if (!name || !superpower || humilityScore === undefined) {
    return reply.status(400).send({ error: "Missing required fields" });
  }

  const newHero: Superhero = {
    id: superheroes.length + 1,
    name,
    superpower,
    humilityScore,
  };

  superheroes.push(newHero);
  return reply.status(201).send(newHero);
});

// Route to get superheroes sorted by humilityScore (descending)
fastify.get("/superheroes", async (_request, reply) => {
  const sortedHeroes = superheroes.sort(
    (a, b) => b.humilityScore - a.humilityScore
  );
  return reply.send(sortedHeroes);
});

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("Server running on http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
