module.exports = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Measurement Service API",
      description: "Measurement Service API information.",
      version: "1.0.0",
      contact: {
        name: "Muhammad Hutomo Padmanaba"
      }
    },
    servers: [
      {
        url: "http://localhost:3002",
        description: "WMS Measurement Service Server"
      }
    ]
  },
  apis: [`${__dirname}/../routes/*.js`]
}