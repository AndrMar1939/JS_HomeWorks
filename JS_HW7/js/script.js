// hw7

// _______________________________________exercise_1
function searchCandidatesByPhoneNumber(phone) {
    phone += "";

    let phoneOnlyDigits = phone.replace(/\D/g, '');

    let result = [];

     candidateArr.forEach(item => {
        let num = item.phone.replace(/\D/g, '');
        if (num.includes(phoneOnlyDigits)) {
            return result.push(item);
        }            
    })

    return result;   
}
// console.log(searchCandidatesByPhoneNumber(9));
// console.log(searchCandidatesByPhoneNumber(12));
// console.log(searchCandidatesByPhoneNumber('2-2  3'));
// console.log(searchCandidatesByPhoneNumber('+1(869) 40'));



// _______________________________________exercise_2

const getCandidateById = id => {
    
    let candidate = candidateArr.find((element, index, arr) => {
        if (id === element._id) {
            // creating a new Object and changing previous reference
            return {...arr[index]};
        }
    })
    
    // declare inner variable 
    const d = new Date(candidate.registered);
    let dateMonth = d.getMonth()+1;
    
    candidate.registered = `${d.getDate().toString().padStart(2, '0')}/${dateMonth.toString().padStart(2, '0')}/${d.getFullYear()}`;

    return candidate;
}

// console.log(getCandidateById("5e216bc9a6059760578aefa4"))
// console.log(getCandidateById("5e216bc9f51c08c39c3ed006"))





// _______________________________________exercise_3

const sortCandidatesArr = (sortBy) => {
    if (!sortBy) {
        return candidateArr;
    } 
    
    // create a new array for sorting
    let innerArr = [...candidateArr];
 
    return innerArr.sort(function (a, b) { 
        let a1 = +a.balance.slice(1).replace(',', '');
        let b1 =  +b.balance.slice(1).replace(',', '');
            
        if (sortBy === 'asc') {return  a1 - b1}
        if (sortBy === 'desc') {return  b1 - a1}
    })
    
}

// console.log(sortCandidatesArr('asc'));
// console.log(sortCandidatesArr('desc'));
// console.log(sortCandidatesArr());




// _______________________________________exercise_4

const getEyeColorMap = () => {
    let obj = {};

    candidateArr.forEach((item) => {
        if (!obj[item.eyeColor]) {
            obj[item.eyeColor] = [];
            return obj[item.eyeColor].push(item);
        }  
        return obj[item.eyeColor].push(item);            
    })

    return obj;  
}

// console.log(getEyeColorMap());