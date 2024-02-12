import { ApolloServer } from "@apollo/server";
import express, { Express } from "express";
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from "body-parser";

export async function initServer(){
    const app: Express = express();
    app.use(bodyParser.json())
    const graphqlServer = new ApolloServer({
        typeDefs:`
            type Query{
                sayHello: String
            }
        `,
        resolvers:{
            Query:{
                sayHello: () => `Hello from gql`
            }
        },

    });
    await graphqlServer.start();
    app.use('/graphql', expressMiddleware(graphqlServer));

    return app;
}