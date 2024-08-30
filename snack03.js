/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */


//function numero random per il peso:
const getRandomNumbers = (min, max, totNumbers) => {
    const numbers = [];
    while(numbers.length < totNumbers){
      const randomNumbers = Math.floor(Math.random() * (max - min))+ min; 
      if(!numbers.includes(randomNumbers)) numbers.push(randomNumbers);
    }
    return numbers;
  }

//Creare un array di oggetti bici di corsa
const biciCorsa = [];

//Quante bici metterei nel array
const totBici = 5;

//generare il peso delle bici
const peso = getRandomNumbers(10, 20, totBici);
console.log(peso);

//Proprietà : bici e peso
const biciList = biciCorsa.map((name, _ , array) => {
    const bici= {
        name: 'Bici da Corsa',
        peso: peso,
    }
    return bici;
});
console.log(biciList)

//Qualle bici pesa meno
  
let ligthBici = peso.map(Number).reduce(function(max, min) {  
  return Math.min(max, min);  
});  
        
console.log(ligthBici); 