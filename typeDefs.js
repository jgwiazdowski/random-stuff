const { gql } = require('apollo-server');
const typeDefs = gql`
    schema {
        query: MyQuery 
    }
 
    type MyQuery {
        "A Simple greeting"
        greeting: String!

        schroedingersCatGreeting: String
        interestingUrls: [String]
        firstName: String
        email: String
        pets: [String],
        randomDiceThrow: Int!
        pi: Float!
        isTodayFriday: Boolean
        randomCoinUntilTrue: [Boolean]
        e: Float
        eulersSeries: [Float]
        today: DayOfWeek!
        workDays: [DayOfWeek]
        currentMonth: Month
        monthsElapsed: [Month]
        requestsCounter: Int
        unpredicTableA: [Int!]
        unpredicTableB: [Int]!
        randomQuote: Quote!
        fewRandomQuotes: [Quote!]!
        now: DateTime!
    } 

    """
    # The object representing a quote

    ## It contains a text and an author
    """
    type Quote {
        text: String!
        author: String!
    }



    type Date {
        year: Int!
        month: Month!
        day: Int!
        weekDay: DayOfWeek!
    }

    type Time {
        hour: Int!
        minute: Int!
        second: Int!        
    }

    type DateTime {
        date: Date!
        time: Time!
    }



    enum DayOfWeek{
        MON
        TUE
        WED
        THU
        FRI
        SAT
        SUN
    }
    enum Month {
        JAN FEB
        MAR
        APR
        MAY
        JUN
        JUL
        AUG
        SEP
        OCT
        NOV
        DEC
    }
`;

module.exports = typeDefs;