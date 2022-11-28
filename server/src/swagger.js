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
              properties: {
                login: {
                  type: "string",
                },
                email: {
                  type: "string",
                },
                password: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              type: "object",
              $ref: "#definitions/UserWithToken",
            },
          },
          201: {
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
              properties: {
                email: {
                  type: "string",
                },
                password: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              type: "object",
              $ref: "#definitions/UserWithToken",
            },
          },
          201: {
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
    UserWithToken: {
      properties: {
        user: {
          type: "object",
          properties: {
            token: {
              type: "string",
            },
            id: {
              type: "number",
            },
            email: {
              type: "string",
            },
            login: {
              type: "string",
            },
            isSuperUser: {
              type: "boolean",
            },
          },
        },
      },
    },
  },
};

module.exports = swagger;
