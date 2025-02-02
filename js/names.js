// Creo la funzione fullName
function fullName(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    };
};


// Esporto la funzione fullName
module.exports = fullName;

// Modo alternativo per esportare la funzione fullName
// module.exports = {fullName};