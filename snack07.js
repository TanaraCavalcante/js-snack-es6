/*
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
*/

const people = [
    { nome: 'Larissa', congnome: 'Sousa', eta: 18},
    { nome: 'Luca', congnome: 'Mauro', eta: 25},
    { nome: 'Tamyres', congnome: 'Silva', eta: 13},
  ];

const messages = people.map((persona)=> 
`${persona.nome} ${persona.cognome} ${(persona.eta >= 18) ? "può guidare" : "non può guidare"}`
);

console.log(messages);





