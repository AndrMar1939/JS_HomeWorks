// HW 2

// problem 1__________________________________________________________________________________________________________________________________problem 1

console.log ('problem 1');

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

let resultArr = [];

for (const key in citiesAndCountries) {
    resultArr[resultArr.length] = `${key} - это ${citiesAndCountries[key]}`;
}
 console.log(resultArr);

 
// // problem 2________________________________________________________________________________________________________________________________________problem 2

console.log ('problem 2');

function getArray() {
    const amount = 12;    
    let arrLength = amount / 3;
    let result = [];

    for (let i = 1; i <= amount; i += 3) {
        let arr = [];
        for (let j = i; j < i + 3; j++) {
            arr.push(j);
        }
        result.push(arr);
      }
    
    return result;
}

console.log(getArray());



// // problem 3 ____________________________________________________________________________________________________________________________________________problem 3

console.log ('problem 3');

const namesOfDays = {
    ua: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П/`ятниця','Субота', 'Неділя'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}


function getNameOfDay(){
    const lang = 'en';
    const day = 7;
    
    for (const key in namesOfDays) {
        if (key === lang) {
            return namesOfDays[key][day - 1];
        }
    }
}

console.log(getNameOfDay()); /// 'Sunday'


// problem 4 ____________________________________________________________________________________________________________________________________________________problem 4
console.log('problem 4');

// array with numbers
const arrayOfNumbers = [19, 5, 42, 2, 77];

function sumOfSmallest(arrayOfNumbers) {
    // declare variable for cycle
    let smallestNumber = arrayOfNumbers[0]; 

    for (let i = 1; i < arrayOfNumbers.length; i++) {
        if (smallestNumber >= arrayOfNumbers[i]) {
            smallestNumber = arrayOfNumbers[i];
        } 
    }

    // delete smallest number from array and look another smallest number in the array
   
    let cutNumber = arrayOfNumbers.indexOf(smallestNumber);
   
    arrayOfNumbers.splice(cutNumber, 1);

    // declare variable for second cycle 
    let secondSmallestNumber = arrayOfNumbers[0];

    for (let i = 1; i < arrayOfNumbers.length; i++) {
        if (secondSmallestNumber >= arrayOfNumbers[i]) {
            secondSmallestNumber = arrayOfNumbers[i];
        } 
    }

    return smallestNumber + secondSmallestNumber;
}

console.log(sumOfSmallest(arrayOfNumbers));



// // problem 5 _____________________________________________________________________________________________________________________________________________________problem 5

console.log('problem 5');

const testingArr = [1, 1, 1, 0, 0, 1];
let counterMultiplication = 1;
let resultNumber = 0;

for (let i = testingArr.length - 1; i >=0; i--) {

    if (testingArr[i] === 1) {
        resultNumber += counterMultiplication;
    }

    counterMultiplication *= 2;
}

console.log(resultNumber);

