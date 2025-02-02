import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { container } from "./config/di";
import registerRoutes from "./config/routes";

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

server.register(registerRoutes);

server.listen({ port: 8080, host: "0.0.0.0" }, async (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
  try {
    await container.prisma.$connect();
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
