// HW 3
const employeeArr = [
    {
        id: 1,
        name: 'Денис',
        surname: 'Хрущ',
        salary: 1010, 
        workExperience: 10, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 2,
        name: 'Сергей',
        surname: 'Войлов',
        salary: 1200, 
        workExperience: 12, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 3,
        name: 'Татьяна',
        surname: 'Коваленко',
        salary: 480, 
        workExperience: 3, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 4,
        name: 'Анна',
        surname: 'Кугир',
        salary: 2430, 
        workExperience: 20, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'female'
    },
    {
        id: 5,
        name: 'Татьяна',
        surname: 'Капустник',
        salary: 3150, 
        workExperience: 30, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 6,
        name: 'Станислав',
        surname: 'Щелоков',
        salary: 1730, 
        workExperience: 15, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 7,
        name: 'Денис',
        surname: 'Марченко',
        salary: 5730, 
        workExperience: 45, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'male'
    },
    {
        id: 8,
        name: 'Максим',
        surname: 'Меженский',
        salary: 4190, 
        workExperience: 39, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 9,
        name: 'Антон',
        surname: 'Завадский',
        salary: 790, 
        workExperience: 7, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 10,
        name: 'Инна',
        surname: 'Скакунова',
        salary: 5260, 
        workExperience: 49, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 11,
        name: 'Игорь',
        surname: 'Куштым',
        salary: 300, 
        workExperience: 1, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
];


// exercise1___________________________________________________________________________________________________________________________exercise1


const Employee = function(employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.surname = employee.surname;
    this.salary = employee.salary; 
    this.workExperience = employee.workExperience; 
    this.isPrivileges = employee.isPrivileges; 
    this.gender = employee.gender;
}


// exercise 2                 _____________________________        create a prototype

Employee.prototype.getFullName = function () {
    return `${this.surname} ${this.name}`;
}

// exercise 3 _________________


let createEmployeesFromArr = (arr) => {

    let arrayResult = [];

    for (const employee of arr) {
        arrayResult.push(new Employee(employee))
    }

    return arrayResult;
};

const employeeConstructArr = createEmployeesFromArr(employeeArr);

console.log(employeeConstructArr);


// exercise 4 ____________________

const getFullNamesFromArr = (arr) => {
    let arrayResult = [];

    for (const employee of arr) {
        arrayResult.push(employee.getFullName())
    }

    return arrayResult;
}
console.log(getFullNamesFromArr(employeeConstructArr));


// exercise 5 ____________________

const getMiddleSalary = (arr) => {
    let sumOfSalary = 0;
   

    for (const ch of arr) {
        sumOfSalary += ch.salary;      
    }

    let resultMiddleSalary = sumOfSalary / arr.length;

    return resultMiddleSalary;
}

console.log(getMiddleSalary(employeeConstructArr));

//  exercise 6 ____________________

const getRandomEmployee = (arr) => {
    let randomNumber = Math.floor(Math.random() * arr.length);

    return arr[randomNumber];
}



// exercise 7 _________________________

// getter
// setter

const employeeObj = new Employee(employeeArr[0]);

console.log(employeeObj);

Object.defineProperty(employeeObj, 'fullInfo', {
    get: function () {
    return `id - ${this.id}, name - ${this.name}, surname - ${this.surname}, salary - ${this.salary}, workExperience - ${this.workExperience}, isPrivileges - ${this.isPrivileges}, gender - ${this.gender}`
    },

    set: function (property) {
        for (let key in property) {
            if (this.hasOwnProperty(key)) {
                this[key] = property[key];
            }  
        }
    },
})

console.log(employeeObj.fullInfo);

employeeObj.fullInfo = {name: 'Вася', salary: 9000, email: 'ex@mail.ua'};

console.log(employeeObj);










