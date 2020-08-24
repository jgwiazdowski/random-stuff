const { ApolloServer } = require('apollo-server');

const typeDefs = `
    type Query {
        greetings: String
    } 
`

const server = new ApolloServer({
    typeDefs
});

server.listen({
    port: 4000
}).then( (result) => {
    console.log('Server is running at ' + result.url);

}).catch( () => {
    console.log('Server failed to run!');
})