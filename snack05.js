/*
ES6 Snack 5
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
 */

let names = ['Pippo', 'PLUTO', 'papperino'];



//Creare una lista in minoscolo;
const uperNames = names.map( name => {
    const fisrtLetter = name.charAt(0).toUpperCase(); 
    const wordLower = name.substring(1).toLowerCase();
    return fisrtLetter + wordLower;
})


