
const Quotes = require('inspirational-quotes');
let counter = 0;
function rootValue() {
    const getRandomDiceThrow = (sides) => Math.ceil(Math.random() * sides);
    const today = new Date();
    const randomCoinToss = () => {
        return Math.random() > 0.5;
    };
    const getRandomCoinTossesUntilTrue = () => {
        const result = [];
        do {
            result.push(randomCoinToss());
        } while (!result[result.length - 1]);
        return result;
    };

    const eulersSeries = () => {
        const result = [2];
        for (i = 0; i < 999; i++) {
            result.push(Math.pow(1 + (1 / result[i]), result[i]));
        }
        return result;
    };

    const randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'FRI', 'SAT'];
    const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    return {
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
        eulersSeries: eulersSeries(),
        today: DAYS_OF_WEEK[today.getDay()],
        workDays: DAYS_OF_WEEK.slice(1, 6),
        currentMonth: MONTHS[today.getMonth()],
        monthsElapsed: MONTHS.slice(0, today.getMonth()),
        schroedingersCatGreeting: randomCoinToss() ? 'Meow' : null,
        unpredicTableA: (counter) % 2 === 0 ? [1, 2, 3] : null,
        unpredicTableB: [1, 2, 3].fill(null, (counter % 3), (counter % 3) + 1),

        randomQuote: Quotes.getQuote(),
        fewRandomQuotes: Array.from({ length: randomNumberBetween(3, 5) }, () => Quotes.getQuote()),


        now: {
            date: {
                year: today.getFullYear(),
                month: MONTHS[today.getMonth()],
                day: today.getDate(),
                weekDay: DAYS_OF_WEEK[today.getDay()]
            },
            time: {
                hour: today.getHours(),
                minute: today.getMinutes(),
                second: today.getSeconds()
            }
        },
        //to avoid increasing counter to early? is it needed at all?
        requestsCounter: counter++,
    };
}


module.exports = rootValue