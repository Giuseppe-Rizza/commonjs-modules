// Importo la funzione fullName dal file names.js
const fullName = require ("./names");

// Modo alternativo per importare la funzione fullName
// const {fullName} = require ("./names");


// Importo la funzione hobbies dal file hobbies.js
const hobbies = require ("./hobbies");

// Modo alternativo per importare la funzione hobbies
// const {hobbies} = require ("./hobbies");


// Creo la funzione senza parametri che restituisce un oggetto con le due proprietà fullName ed hobbies

function namesHobbies() {

    fullName(Giuseppe, Rizza);

    hobbies(viaggi, vino, cucina);

    return {
        fullName: "fullName.firstName" + " " + "fullName.lastName",
        hobbies: "hobbies.hobbyOne" + ", " + "hobbies.hobbyTwo" + ", " + "hobbies.hobbyThree"
    };
};

console.log(namesHobbies(fullName, hobbies));