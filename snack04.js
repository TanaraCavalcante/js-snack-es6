/* 
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

//TODO FUNCTION
//RandomNumbers
const getRandomNumbers = (min, max, totNumbers) => {
    const numbers = [];
    while(numbers.length < totNumbers){
      const randomNumbers = Math.floor(Math.random() * (max - min))+ min; 
      if(!numbers.includes(randomNumbers)) numbers.push(randomNumbers);
    }
    return numbers;
  }

//Ricoperare ellementi dal DOM
const result = document.querySelector('ul');

//Creare l'array della squadra
const teams = ['Flamengo', 'Santos', 'Fortaleza', 'Fluminense'];

//Definire i valori dei punti
const fatti = getRandomNumbers(0, 30, teams.length);
const subiti = getRandomNumbers(0, 30, teams.length);

//Array con le proprietà del'oggetto
const finalTeams = teams.map((name, i) => {
    const teamBoard = {
        squadra: name,
        fatti : fatti[i],
        subiti: subiti[i],
    }
    return teamBoard;
});

//Mostrare in console
for (let i = 0; i < finalTeams.length; i++){
    const team = finalTeams[i];
    console.log(team.squadra);
    console.log(team.fatti);
    console.log(team.subiti);
}
    
//Output
let items = ''
for (let i = 0; i < finalTeams.length; i++){
    const team = finalTeams[i];
    items += `
            <li class="list-group-item list-group-item-dark"><b>${team.squadra}</b></li>
            <li class="list-group-item">Punti fatti: ${team.fatti}</li>
            <li class="list-group-item">Punti subiti: ${team.subiti}</li>
            `
}

result.innerHTML = items;