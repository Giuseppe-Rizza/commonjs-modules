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

    const nameSurname = fullName("Giuseppe", "Rizza");

    const activities = hobbies("viaggi", "vino", "cucina");

    return {
        fullName: nameSurname.firstName + " " + nameSurname.lastName,
        hobbies: activities[0]+ ", " + activities[1] + ", " + activities[2]
    };
};

console.log(namesHobbies());