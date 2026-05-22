
// npm i graphql@15.7.2 apollo-server@3.5.0 apollo-server-core@3.5.0

import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { queries, users } from "./fakeDB.js";

const typeDefs = gql`
  type User {
    name: String
    email: String
  }

  type Products {
    id: ID
    productname: String
    price: String
    description: String
  }

  type UsersType {
    id: ID
    name: String
    email: String
    queries: [QueryType]
  }

  type QueryType {
    id: ID
    title: String
  }

  type Query {
    greet: String
    user: User
    product: Products
    users: [UsersType]
    queries: [QueryType]
    userByID(id: ID!): UsersType
  }

 type Mutation {

  addUser(
    id: ID!,
    name: String!,
    email: String!
  ): UsersType
}
`;

const resolvers = {
  Query: {
    greet: () => {
      return "Welcome user...";
    },

    user: () => {
      return {
        name: "Aparna",
        email: "aparna@gmail.com",
      };
    },

    product: () => {
      return {
        id: 101,
        productname: "Electronic Watch",
        price: "699",
        description:
          "Stay effortlessly on time with our precision-driven electric timepiece.",
      };
    },

    users: () => {
      return users;
    },

    queries: () => {
      return queries;
    },

    userByID: (_, { id }) => {
      return users.find((u) => u.id == id);
    },
  },

  UsersType: {
    queries: (user) => {
      return queries.filter((item) => item.id == user.id);
    },
  },

 Mutation: {

  addUser: (_, args) => {

    users.push(args);

    return args;
  }
}
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log("Server running at " + url);
});