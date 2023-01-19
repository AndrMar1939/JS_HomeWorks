// HW6

// _________________________________________________exercise_1___
function removeUser (arr, i) {
    return i >= arr.length  ? "Error, index is to big" : arr.splice(i, 1);    
}
// removeUser(candidateArr, 4);
// console.log(candidateArr);
// console.log(removeUser(candidateArr, 332));



// _________________________________________________exercise_2___
function getAllKeys(obj) {
    return Object.keys(obj);
}
// console.log(getAllKeys(candidateArr[3]));  
// console.log(getAllKeys(candidateArr));  


// _________________________________________________exercise_3___
function getAllValues(obj) {
    return Object.values(obj);
}
// console.log(getAllValues(candidateArr[3]));  
    // console.log(getAllValues(candidateArr));  

// _________________________________________________exercise_4___
function insertIntoArr(obj, id) {
    
    let i = null;
    
    candidateArr.forEach(function (element, index) {
        if (element._id === id) {
            console.log(index);
            i = index;           
        }
    });

    return i !== null ? candidateArr.splice(i, 0, obj) : "ID doesn`t exist";
    
}

// insertIntoArr('example', '5e216bc9c8c35b230ee6da35');
// console.log(candidateArr);


// _________________________________________________exercise_5___

class Candidate {
    constructor(person) {
        Object.assign(this, person);
    }

    get state () {
        let innerArr = this['address'].split(', ');
        return innerArr[innerArr.length - 2];
    }
}

const candidate = new Candidate(candidateArr[0]);
const candidate2 = new Candidate(candidateArr[50]);

// console.log(candidate.state);
// console.log(candidate2.state);

// __________________________________________________exercise_6___

function getCompanyNames() {
    let innerArr = candidateArr.map(element => {
       return element['company'];
    });

    return Array.from(new Set(innerArr));
}

// console.log(getCompanyNames());

// __________________________________________________exercise_7___

function getUsersByYear(year) {
    let result = [];    
    candidateArr.forEach(element => {
        let innerDate = new Date(element['registered']);
        if (innerDate.getFullYear() === year) {
        result.push(element['_id'])}
    });
    return result.length === 0 ? "Empty, there is the year without registration" : result;
}

// console.log(getUsersByYear(2021));  
// console.log(getUsersByYear(2017));  

// __________________________________________________exercise_8___

function getCandidatesByUnreadMsg(number) {   

    let result = [];

    candidateArr.forEach(element => {
        let innerArr = element["greeting"].split(" ");
        let numberOfMsg = innerArr[innerArr.length - 3];

        if (numberOfMsg == number) {
            const candidate = new Candidate(element);
            result.push(candidate)
        }
    });

    return result;
}
// console.log(getCandidatesByUnreadMsg(4));

// __________________________________________________exercise_9___

function getCandidatesByGender(gender) {
    let result = candidateArr.filter(candidate => candidate['gender'] === gender);
    return result;
}
// console.log(getCandidatesByGender('male'));
// console.log(getCandidatesByGender('female'));

// __________________________________________________exercise_10__

// custom join()

function customJoin(arr, separator) {
    let result = '';

    arr.forEach(function (element, index) {
        index === arr.length-1 || separator === undefined ? result += element : result+= element + separator;
    })

    return arr.length === 0 ? 'there is an empty array' : result;
};

const arrForCustomJoin = ['first', 'second', 'third', 'last'];

// console.log(customJoin(arrForCustomJoin, '-+-'));



// custom reduce

function customReduce(arr, initialVal) {
    let result = 0;
    if (!!initialVal === true) {
        result+= initialVal;
    }
 
    arr.forEach(element => result+=element)

    return result;
}

// const arrayForReduce = [1, 2, 3, 4];
// console.log(customReduce(arrayForReduce))
// console.log(customReduce(arrayForReduce, 10))


