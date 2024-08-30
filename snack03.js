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

//generare il peso delle bici

//Proprietà : bici e peso

//Qualle bici pesa meno

        
