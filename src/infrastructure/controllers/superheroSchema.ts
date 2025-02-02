// src/schemas/postSchemas.ts

export const createSuperheroSchema = {
  tags: ["Post"],
  summary: "Create Post - Must include existent userId",
  body: {
    type: "object",
    required: ["superhero_name", "superpower", "humility_score"],
    properties: {
      superhero_name: { type: "string", minLength: 1 },
      superpower: { type: "string", minLength: 10 },
      humility_score: { type: "integer", minimum: 1, maximum: 10 },
    },
    additionalProperties: false,
  },
  response: {
    201: {
      type: "object",
      properties: {
        id: { type: "integer" },
        superhero_name: { type: "string" },
        superpower: { type: "string" },
        humility_score: { type: "integer" },
        createdAt: { type: "string", format: "date-time" },
      },
      required: [
        "id",
        "superhero_name",
        "superpower",
        "humility_score",
        "createdAt",
      ],
    },
    400: {
      type: "object",
      properties: {
        error: { type: "string" },
        message: { type: "string" },
      },
      required: ["error", "message"],
    },
    500: {
      type: "object",
      properties: {
        error: { type: "string" },
        message: { type: "string" },
      },
      required: ["error", "message"],
    },
  },
  security: [
    {
      BearerAuth: [],
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};
export const getAllSuperheroesSchema = {
  tags: ["Get"],
  summary: "Get All Superheroes",
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "integer" },
          superhero_name: { type: "string" },
          superpower: { type: "string" },
          humility_score: { type: "integer" },
          createdAt: { type: "string", format: "date-time" },
        },
        required: [
          "id",
          "superhero_name",
          "superpower",
          "humility_score",
          "createdAt",
        ],
      },
    },
    400: {
      type: "object",
      properties: {
        error: { type: "string" },
        message: { type: "string" },
      },
      required: ["error", "message"],
    },
    500: {
      type: "object",
      properties: {
        error: { type: "string" },
        message: { type: "string" },
      },
      required: ["error", "message"],
    },
  },
  security: [
    {
      BearerAuth: [],
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};
