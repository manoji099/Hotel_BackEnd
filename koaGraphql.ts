import { ApolloServer } from 'apollo-server-koa';
import './createConnection';
import * as koa from 'koa';
import { graphqlHTTP } from 'koa-graphql';
import * as Router from 'koa-router';
import { buildSchema } from 'type-graphql';
import HotelResolver from './HotelResolver';
import * as cors from '@koa/cors';

async function main() {
    const app = new koa();

    const resolver = await buildSchema({ resolvers: [HotelResolver] });
    const apolloServer = new ApolloServer({ schema: resolver });
    const router = new Router();
    router.all('/graphql', graphqlHTTP({ schema: resolver }));
    apolloServer.applyMiddleware({ app });
    app.use(cors());
    app.use(router.routes()).use(router.allowedMethods());

    app.listen(process.env.PORT || 3010, () => console.log("graphql is running"));

}

main();
