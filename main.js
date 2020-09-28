// 1.
// Here are 3 functions that return promises
// 1st function creates a random number and refactors the name
// 2nd function decides the level of the user
// 3rd function gives hit points and strength of user based on level
// Using async await....create a function called login, that takes a name and email
// Success from the function will log a string using values from all 3 functions
// Successful String Output: '<name from loginUser> is an <level> player with <strength> strength and <hitPoint> hit points.'
// Failed String Output: 'User Not Logged in'

// Except for loginUser, calling a function requires a value from the previous function
// Do not edit loginUser, level or levelPower except to test the error variable
// log the error message in your function so that it shows the message if reject has been called

const loginUser = (name) => {
    return new Promise((resolve, reject) => {
        const error = false;
        let random = Math.floor(Math.random() * 98);

        error
            ? reject('User Not logged in')
            : resolve({ name: `The ${name}-Meister`, random });
    });
};

let level = (levelNumber) => {
    return new Promise((resolve, reject) => {
        levelNumber === 0
            ? reject('User had no power and is expired')
            : levelNumber < 32
                ? resolve('amateur')
                : levelNumber < 65
                    ? resolve('intermediate')
                    : resolve('advanced');
    });
};

let levelPower = (level) => {
    return new Promise((resolve, reject) => {
        return 'advanced'
            ? resolve({ hitPoints: 200, strength: 10 })
            : 'intermediate'
                ? resolve({ hitPoints: 100, strength: 7 })
                : resolve({ hitPoints: 70, strength: 4 });
    });
};





async function login(name, email) {
    try {
        const loginName = await loginUser()
        const playerLevel = await level()
        const powerLevel = await levelPower()
        console.log(`${loginName}, ${playerLevel}, ${powerLevel}`)
    }
    catch (err) {
        console.log(err)
    }
}


login()
//===================================================================================================//
//===================================================================================================//

/************************************************************
 *                          // 2.                           *
 *        // WRITE AN ASYNC FUNCTION GETUSERSEMAILS         *
 *       // USING FETCH, IT SHOULD CALL THE GIVEN URL       *
 * // CONST URL1 = 'HTTPS://RANDOMUSER.ME/API/?RESULTS=10'; *
 *             // LOG OUT A LIST OF USER EMAILS             *
 *                        // OUTPUT                         *
 *                      // EMAIL LIST:                      *
 *              // CRAIG.ODONOGHUE@EXAMPLE.COM              *
 *             // FERDINANDA.FARIAS@EXAMPLE.COM             *
 *              // ISABELLA.HORTON@EXAMPLE.COM              *
 *              // ALESSANDRO.RINK@EXAMPLE.COM              *
 *            // GIULIA.DACONCEICAO@EXAMPLE.COM             *
 *               // YOLANDA.NIETO@EXAMPLE.COM               *
 *              // SANDER.THOMSEN@EXAMPLE.COM               *
 *               // DAMIEN.DUPONT@EXAMPLE.COM               *
 *             // ISABELLA.CARROLL@EXAMPLE.COM              *
 *                // JAKE.OWENS@EXAMPLE.COM                 *
 ************************************************************/


// const fetch = require('node-fetch');
// const url1 = 'https://randomuser.me/api/?results=10'


// async function getUsersEmails(endpoint) {
//     const response = await fetch(endpoint)

//     let json = await response.json()
//     //returns an object

//     // to get the array inside the object with all the values
//     json = json.results

//     const data = json.map((results)=>results.email)
//     console.log(data)
// }

// getUsersEmails(url1)





//===================================================================================================//
//===================================================================================================//

/******************************************************************************************************
 *                                               // 3.                                                *
 *                                // WRITE AN ASYNC FUNCTION GETFILMS                                 *
 *                            // USING AXIOS, IT SHOULD CALL THE GIVEN URL                            *
 *                       // LET URL = 'HTTPS://GHIBLIAPI.HEROKUAPP.COM/FILMS';                        *
 *              // FUNCTION SHOULD RANDOMLY CHOOSE ONE OF THE OBJECTS FROM YOUR API CALL              *
 * // AND LOG THE TITLE AS WELL AS THE CLASSIFICATION AND NAME FROM THE LAST URL IN THE SPECIES ARRAY *
 *                           // STUDY THE DATA TO FIGURE OUT YOUR SOLUTION                            *
 *                // OUTPUT WILL BE RANDOM BUT FORMAT IT LIKE THE EXAMPLE OUTPUT BELOW                *
 *                                         // EXAMPLE OUTPUT:                                         *
 *                                   // TITLE: WHISPER OF THE HEART                                   *
 *                                     // CLASSIFICATION: MAMMAL                                      *
 *                                           // NAME: HUMAN                                           *
 ******************************************************************************************************/


// https://github.com/axios/axios#installing

// const axios = require('axios').default
// let url = 'https://ghibliapi.herokuapp.com/films';

// async function getFilms(endpoint) {
//     const response = await axios.get(endpoint)


//     // create a random number to use as the index for choosing random objects in dataSet
//     let random = Math.floor(Math.random() * response.data.length);
//     let randomChoice = response.data[random]


//     // convert url form array format  to string format
//     let speciesURL = randomChoice.species.toString()

//     // species contains a URL with new information that we need
//     // this will get us into that URL and give us what we need
//     const speciesResponse = await axios.get(speciesURL)


//     // data within the species URL
//     const classification = speciesResponse.data.classification
//     const name = speciesResponse.data.name




//     console.log(
//         `
//         Title: ${randomChoice.title}
//         Classification: ${classification}
//         Name: ${name}
//         `
//     )

//     // i receive a 404  error 3 out of 27 times when running script, unsure as to why,
//     // maybe the numbers given to random are not always within our data structure
//     // 
// }

// getFilms(url)
//===================================================================================================//
//===================================================================================================//
