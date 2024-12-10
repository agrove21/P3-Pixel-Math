require("dotenv").config();
const express = require("express");
const http = require("http");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const { typeDefs, resolvers } = require("./schemas");
const { auth } = require("./utils/auth");
const connectDB = require("./config/connection");
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
connectDB();
const PORT = process.env.PORT || 4000;
async function startServer() {
  await server.start();
  app.use(
    "/graphql",
    express.json(),
    expressMiddleware(server, {
      context: auth,
    })
  );
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`:rocket: Server ready at http://localhost:4000/graphql`);
}
startServer();
