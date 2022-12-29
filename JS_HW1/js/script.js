// HW 1

// problem 1__________________________________________________________________________________________________________________________________problem 1

console.log ('problem 1');

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0){
        console.log("FizBuz");
    } else if (i % 2 === 0) {
        console.log("Fiz");
    } else {
        console.log("Buz");
    }
};



// problem 2________________________________________________________________________________________________________________________________________problem 2

console.log ('problem 2');

function factorial (numberInteger) {

    let result = numberInteger; 

    for (let i = (numberInteger - 1); i > 0; i--) {
    result *= i;
    }; 

    return result;
}

console.log(factorial(10));




// problem 3 ____________________________________________________________________________________________________________________________________________problem 3

console.log ('problem 3');

function paperReamCounting(sheetsInReamPaper, consumptionPerWeek, weeksAmount) {
    
    let sumOfPaper = consumptionPerWeek * weeksAmount;

    let result = sumOfPaper % sheetsInReamPaper === 0 ? sumOfPaper / sheetsInReamPaper :
    (sumOfPaper - (sumOfPaper % sheetsInReamPaper)) / sheetsInReamPaper + 1;

    return result;
}

console.log(paperReamCounting(500, 1200, 8));
   

// problem 4 ____________________________________________________________________________________________________________________________________________________problem 4
console.log('problem 4');

// declare variables

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 456;

// declare new function 

function findFlatByNumber (flatNumber) {
    
    let porch = null;
    let floor = null;

    let flatsOnPorch = floors * roomsOnFloor;
    let porchNumber = roomNumber % flatsOnPorch === 0 ? roomNumber / flatsOnPorch : (roomNumber - (roomNumber % flatsOnPorch)) / flatsOnPorch + 1;

    if (flatNumber > roomNumber || flatNumber <= 0 || typeof(flatNumber) !== typeof(1)) {
        return 'a flat doesn`t exist';
    }

    // find porch

    if (flatNumber <= flatsOnPorch) {
        porch = 1;
    } else if (flatNumber > (roomNumber - (roomNumber % flatsOnPorch))) {
        porch = porchNumber;
    } else if(flatNumber % flatsOnPorch === 0) {
        porch = flatNumber / flatsOnPorch;
    } else {
        porch = (flatNumber -(flatNumber % flatsOnPorch)) / flatsOnPorch + 1;
    }

    // find floor

    if (flatNumber % flatsOnPorch !== 0 && flatNumber % flatsOnPorch <= 3) {
        floor = 1;
    } else if (flatNumber % flatsOnPorch > 3 && flatNumber % flatsOnPorch <= 6) {
        floor = 2;
    } else if (flatNumber % flatsOnPorch > 6 && flatNumber % flatsOnPorch <= 9) {
        floor = 3;
    } else if (flatNumber % flatsOnPorch > 9 && flatNumber % flatsOnPorch <= 12) {
        floor = 4;
    } else if (flatNumber % flatsOnPorch > 12 && flatNumber % flatsOnPorch <= 15) {
        floor = 5;
    } else if (flatNumber % flatsOnPorch > 15 && flatNumber % flatsOnPorch <= 18) {
        floor = 6;
    } else if (flatNumber % flatsOnPorch > 18 && flatNumber % flatsOnPorch <= 21) {
        floor = 7;
    } else if (flatNumber % flatsOnPorch > 21 && flatNumber % flatsOnPorch <= 24) {
        floor = 8;
    } else if (flatNumber % flatsOnPorch > 24 || flatNumber % flatsOnPorch === 0) {
        floor = 9;
    } 
    

    return `porch ${porch}, floor ${floor}`;
}

// input number
console.log(findFlatByNumber(333));




// problem 5 _____________________________________________________________________________________________________________________________________________________problem 5

console.log('problem 5');

// input number and see pyramid

const medianNumber = 6;

console.log(`height of pyramid ${medianNumber}`);

// declare variables

let rawLength = medianNumber * 2 - 1;
let rawPyramid = '';
let counter = 0;

for (let i = 1; i <= medianNumber ; i++) {
    
    for (let i = 1; i <= rawLength ; i++) {
        if (i < medianNumber - counter) {
        rawPyramid += '-';
        } else if (i >= medianNumber - counter && i <= medianNumber + counter) {
        rawPyramid += '#';
        } else if (i > medianNumber + counter) {
        rawPyramid += '-';
        }
    }  

    counter++;  
    console.log(rawPyramid);
    rawPyramid = '';
}   



