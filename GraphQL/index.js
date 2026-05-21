// npm i graphql@15.7.2 apollo-server@3.5.0 apollo-server-core@3.5.0

import { ApolloServer,gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const typeDefs= gql`
type User{
name: String,
email:String
}

type Products{
id:ID,
productname:String,
price:String,
Descripion:String
}

type Query{
    greet:String,
    user:User
    product:Products
}
`
const resolvers={
    Query:{
        greet: ()=>{ return "Welcome user..."},
        user: () => {
        return {
        name: "Aparna",
        email: "aparna@gmail.com"
        };
        },
        product:()=>{
            return {
                id:101,
                productname:"Electronic Watch",
                price:"699",
                Descripion:"Stay effortlessly on time with our precision-driven electric timepiece. Designed with a sleek, high-contrast digital screen."
            }
        }
    }
}

const server= new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[ApolloServerPluginLandingPageGraphQLPlayground]
})

server.listen().then(({url})=>{

    console.log("server running at "+url)
})

// on Browser -> localhost:4000
// On Client side playground
// # Write your query or mutation here

// # {greet}

// # {user {name}}

// {product {id,productname,price}}