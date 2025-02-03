import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { container } from "./config/di";
import registerRoutes from "./config/routes";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import cors from "@fastify/cors";

const server = fastify({
  logger: true,
});

// Register CORS plugin
server.register(cors, {
  origin: "*", // Allow all origins
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
});
server.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Superhero API",
      description: "Superhero API Documentation",
      version: "0.0.0",
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
});

server.register(fastifySwaggerUi, {
  routePrefix: "/documentation",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  staticCSP: true,
  transformSpecification: (swaggerObject, request, reply) => {
    return swaggerObject;
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
  await container.prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await container.prisma.$disconnect();
  process.exit(0);
});
