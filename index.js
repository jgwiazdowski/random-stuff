const { ApolloServer, gql } = require('apollo-server');

const PORT = process.env.PORT || 4000;

const typeDefs = gql`
    type Query {
        greeting: String,
        interestingUrls: [String],
        firstName: String
        email: String
        pets: [String],
        randomDiceThrow: Int
        pi: Float
        isTodayFriday: Boolean
        randomCoinUntilTrue: [Boolean]
        e: Float
        eulersSeries: [Float]
    } 
`



function rootValue() {
    const getRandomDiceThrow = (sides) => Math.ceil(Math.random() * sides);
    const today = new Date();

    const randomCoinToss = () => {
        return Math.random() > 0.5;
    }
    const getRandomCoinTossesUntilTrue = () => {
        const result = [];
        do {
            result.push(randomCoinToss());
        } while(!result[result.length - 1])
        return result;
    }

    const eulersSeries = () => {
        const result = [2];
        for(i = 0; i < 999 ; i++){            
            result.push(Math.pow(1+(1/result[i]),result[i]))
        }
        return result;
    }




    const data = {
        greeting: "Hello World",
        interestingUrls: [
            'https://github.com',
            'https://ea.com',
            'https://medium.com',
        ],
        firstName: "John",
        email: "john@example.com",
        pets: ["Mittens", "Doggo", "Birb"],
        randomDiceThrow: getRandomDiceThrow(6),
        pi: Math.PI,
        isTodayFriday: today.getDay() === 5,
        randomCoinUntilTrue: getRandomCoinTossesUntilTrue(),
        e: Math.E,
        eulersSeries: eulersSeries()
    }
    return data;
}



const server = new ApolloServer({
    typeDefs,
    rootValue,
    playground: true,
    introspection: true
});




server.listen({
    port: PORT
}).then(result => {
    console.log('Server is running at ' + result.url);
}).catch(err => {
    console.log('Server failed to run!');
})