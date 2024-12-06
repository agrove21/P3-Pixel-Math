const typeDefs = `#graphql
  type User {
    _id: ID
    name: String
    email: String
    pixels: [Pixel]
  }
  type Pixel {
    _id: ID
    name: String
    design: [String]
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    me: User
    pixels: [Pixel]
    pixel(pixelId: ID!): Pixel
  }
  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPixel(name: String!, design: [String]!): Pixel
    removePixel(pixelId: ID!): Pixel
  }
`;
module.exports = typeDefs;