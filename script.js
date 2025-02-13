// Initialize message array
const planetArr = ['Luna', 'Mercury', 'Venus', 'Sol', 'Mars', 'Jupiter', 'Saturn'];
const zodiacArr = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const fortuneArr = ['great fortune', 'great misfortune', 'impending doom', 'blossoming love'];

// Store in object for easy access
const msgObj = {
    planet: planetArr,
    zodiac: zodiacArr,
    fortune: fortuneArr,
};

// Creates the random message
const createMessage = () => {
    for (const prop in msgObj) {
        const randNum = Math.floor(Math.random() * msgObj[prop].length);
        switch (prop) {
            case 'planet':
                console.log(`${msgObj[prop][randNum]} rules your desinty...`);
                break;
            case 'zodiac':
                console.log(`Whilst the sign of ${msgObj[prop][randNum]} severs the threads of fate;`);
                break;
            case 'fortune':
                console.log(`Thus, you will experience ${msgObj[prop][randNum]}.`);
                break;
        }
    }
};

// Create random message
createMessage();
