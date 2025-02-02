// Creo la funzione identity
function identity (firstName, lastName) {
    return {
        firstName,
        lastName
    };
};

console.log(identity (firstName, lastName));


// Esporto la funzione identity
module.exports = identity;

// Modo alternativo per esportare la funzione identity
// module.exports = {identity};