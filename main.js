/*********************************************************************************************************************************
 *                                                             // 1.                                                             *
 *                                         // HERE ARE 3 FUNCTIONS THAT RETURN PROMISES                                          *
 *                                // 1ST FUNCTION CREATES A RANDOM NUMBER AND REFACTORS THE NAME                                 *
 *                                         // 2ND FUNCTION DECIDES THE LEVEL OF THE USER                                         *
 *                             // 3RD FUNCTION GIVES HIT POINTS AND STRENGTH OF USER BASED ON LEVEL                              *
 *                      // USING ASYNC AWAIT....CREATE A FUNCTION CALLED LOGIN, THAT TAKES A NAME AND EMAIL                      *
 *                       // SUCCESS FROM THE FUNCTION WILL LOG A STRING USING VALUES FROM ALL 3 FUNCTIONS                        *
 * // SUCCESSFUL STRING OUTPUT: '<NAME FROM LOGINUSER> IS AN <LEVEL> PLAYER WITH <STRENGTH> STRENGTH AND <HITPOINT> HIT POINTS.' *
 *                                         // FAILED STRING OUTPUT: 'USER NOT LOGGED IN'                                         *
 *                    // EXCEPT FOR LOGINUSER, CALLING A FUNCTION REQUIRES A VALUE FROM THE PREVIOUS FUNCTION                    *
 *                        // DO NOT EDIT LOGINUSER, LEVEL OR LEVELPOWER EXCEPT TO TEST THE ERROR VARIABLE                        *
 *               // LOG THE ERROR MESSAGE IN YOUR FUNCTION SO THAT IT SHOWS THE MESSAGE IF REJECT HAS BEEN CALLED                *
 *********************************************************************************************************************************/
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



        console.log(`${loginName.name} is an ${playerLevel} player with ${powerLevel.strength} strength and ${powerLevel.hitPoints} hit points`)
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
