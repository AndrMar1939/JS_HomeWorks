// HW 5
// ____________________________exercise 1

function count () {
    let number = null;
    return (num) => number += num;
}
const counter = count();

console.log(counter(3));
console.log(counter(7));
console.log(counter(344));

// ____________________________exercise 2

function getArr () {
    let arr = [];
    return function (arg) {
        if (!arg) {
            return arr = [];    
        }
        arr.push(arg);
        return arr;
    }
}
const getUpdatedArr = getArr();

console.log(getUpdatedArr(5));
console.log(getUpdatedArr([1,2,3]));
console.log(getUpdatedArr('Andrii'));
console.log(getUpdatedArr());
console.log(getUpdatedArr('Andrii'));
console.log(getUpdatedArr(3));

// ____________________________exercise 3

function foo () {
    let firstTime = new Date;
    let counter = 0;

    return function () {        
        let secondTime = new Date;
        let time = Math.trunc((secondTime - firstTime) / 1000);
        
        firstTime = secondTime;       
        counter++;

        if (counter === 1) {
           return "Enabled"; 
        }
        return time;       
    }
}
let getTime = foo();

// ____________________________exercise 4

function timeCounter (timeInSeconds) {

    const intervalID = setInterval(() => {

        if (timeInSeconds === 0) {
            console.log('Time End');
            clearInterval(intervalID);
            return
        }     
        
        let minutes = Math.floor(timeInSeconds / 60);
        let seconds = timeInSeconds % 60;

            
        let min = minutes.toString();
        let sec = seconds.toString();

        --timeInSeconds;

        console.log(`${min.padStart(2, '0')}:${sec.padStart(2, '0')}`)
               
    
    }, 1000)
}


// timeCounter(417)


