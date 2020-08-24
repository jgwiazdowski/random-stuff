const { ApolloServer, gql } = require('apollo-server');
const PORT = process.env.PORT || 4000;

const typeDefs = gql`
    type Query {
        greeting: String,
        interestingUrls: [String],
        firstName: String
        email: String
        pets: [String]
    } 
`

const data = {
    greeting: "Hello World",
    interestingUrls: [
        'https://github.com',
        'https://ea.com',
        'https://medium.com',
    ],
    firstName: "John",
    email: "john@example.com",
    pets: ["Mittens", "Doggo", "Birb"]
}

const server = new ApolloServer({
    typeDefs,
    rootValue: data
});




server.listen({
    port: PORT
}).then( result => {
    console.log('Server is running at ' + result.url);
}).catch( err => {
    console.log('Server failed to run!');
})