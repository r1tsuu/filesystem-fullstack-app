const auth = {
  name: "Authorization",
  in: "header",
  schema: {
    type: "string",
  },
  required: true,
};

const swagger = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Filesystem API",
  },
  schemes: [process.env.NODE_ENV === "development" ? "http" : "https"],
  basePath: "/api",
  paths: {
    "/user/register": {
      post: {
        tags: ["User"],
        summary: "Register user and send auth token",

        parameters: [
          {
            in: "body",
            name: "body",
            description: "Register JSON Body",
            require: true,
            schema: {
              type: "object",
              $ref: "#definitions/UserCredentials",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              type: "object",
              $ref: "#definitions/AuthToken",
            },
          },
          400: {
            description: "Error: User does already exist",
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  default: "userDoesExist",
                },
              },
            },
          },
        },
      },
    },
    "/user/login": {
      post: {
        tags: ["User"],
        summary: "Login user and send auth token",
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Login JSON Body",
            require: true,
            schema: {
              type: "object",
              $ref: "#definitions/UserCredentials",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              type: "object",
              $ref: "#definitions/AuthToken",
            },
          },
          400: {
            description: "Error: Invalid credentials",
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  default: "invalidCredentials",
                },
              },
            },
          },
        },
      },
    },
  },

  definitions: {
    UserCredentials: {
      properties: {
        login: {
          type: "string",
        },
        password: {
          type: "string",
        },
        email: {
          type: "string",
        },
      },
    },
    AuthToken: {
      properties: {
        token: {
          type: "string",
        },
      },
    },
  },
};

module.exports = swagger;
