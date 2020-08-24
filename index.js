const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        greeting: String,
        interestingUrls: [String]
    } 
`

const data = {
    greeting: "Hello World",
    interestingUrls: [
        'https://github.com',
        'https://ea.com',
    ]
}

const server = new ApolloServer({
    typeDefs,
    rootValue: data
});




server.listen({
    port: 4000
}).then( result => {
    console.log('Server is running at ' + result.url);
}).catch( err => {
    console.log('Server failed to run!');
})