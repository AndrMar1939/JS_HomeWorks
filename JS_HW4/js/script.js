// HW 4
// student arr
const studentArr = [{
        name: 'Сергей',
        surname: 'Войлов',
        ratingPoint: 1000,
        schoolPoint: 1000,
        course: 2,
    },
    {
        name: 'Татьяна',
        surname: 'Коваленко',
        ratingPoint: 880,
        schoolPoint: 700,
        course: 1,
    },
    {
        name: 'Анна',
        surname: 'Кугир',
        ratingPoint: 1430,
        schoolPoint: 1200,
        course: 3,
    },
    {
        name: 'Станислав',
        surname: 'Щелоков',
        ratingPoint: 1130,
        schoolPoint: 1060,
        course: 2,
    },
    {
        name: 'Денис',
        surname: 'Хрущ',
        ratingPoint: 1000,
        schoolPoint: 9290,
        course: 4,
    },
    {
        name: 'Татьяна',
        surname: 'Капустник',
        ratingPoint: 650,
        schoolPoint: 500,
        course: 3,
    },
    {
        name: 'Максим',
        surname: 'Меженский',
        ratingPoint: 990,
        schoolPoint: 1100,
        course: 1,
    },
    {
        name: 'Денис',
        surname: 'Марченко',
        ratingPoint: 570,
        schoolPoint: 1300,
        course: 4,
    },
    {
        name: 'Антон',
        surname: 'Завадский',
        ratingPoint: 1090,
        schoolPoint: 1010,
        course: 3
    },
    {
        name: 'Игорь',
        surname: 'Куштым',
        ratingPoint: 870,
        schoolPoint: 790,
        course: 1,
    },
    {
        name: 'Инна',
        surname: 'Скакунова',
        ratingPoint: 1560,
        schoolPoint: 200,
        course: 2,
    },
];


// ______________________________________________________________________________________________________________________exercise 1__

// create class

class Student {
    
    constructor(enrollee) {
        // id
        this.id = Student.ID++;

        // copy properties
        for (let ch in enrollee) {
            this[ch] = enrollee[ch];
        }   
        
        // define isSelfPayment and change studentsArr

        if (this.ratingPoint < 800) {
            this.isSelfPayment = true;
        } else if (Student.studentsArr.length < 5) {    
            Student.studentsArr.push(this);
            this.isSelfPayment = false;
        } else {
            Student.studentsArr.push(this);
            // sort array
            Student.studentsArr.sort(function (a, b) {return b.ratingPoint - a.ratingPoint});

            console.log(Student.studentsArr);

            // for (let ch of Student.studentsArr) {
            //     if (this.ratingPoint = ch.ratingPoint && this.schoolPoint < ch.schoolPoint) {
            //         Student.studentsArr.pop();
            //         this.isSelfPayment = true; 
            //     } else 
            //     }

            if (Student.studentsArr.indexOf(this) === 5) {
                Student.studentsArr.pop();
                this.isSelfPayment = true;               
            } 
            else {
                Student.studentsArr[5].isSelfPayment = true;
                this.isSelfPayment = false;
                Student.studentsArr.pop(); 
            } 
        }   
    }
  

    static ID=1

    static studentsArr = [];

    static defineSelfPayment () {

    }

    // getter listOfStudents
    static get listOfStudents () {
        return Student.studentsArr;
    }
    

}

console.log(studentArr);

console.log(Student.listOfStudents);

let stud = new Student(studentArr[0]);
let stud1 = new Student(studentArr[1]);
let stud2 = new Student(studentArr[2]);
let stud3 = new Student(studentArr[3]);
let stud4 = new Student(studentArr[4]);
let stud5 = new Student(studentArr[5]);
let stud6 = new Student(studentArr[6]);
let stud7 = new Student(studentArr[7]);
let stud8 = new Student(studentArr[8]);
let stud9 = new Student(studentArr[9]);
let stud10 = new Student(studentArr[10]);


console.log(stud.isSelfPayment);
console.log(stud1.isSelfPayment);
console.log(stud2.isSelfPayment);
console.log(stud3.isSelfPayment);
console.log(stud4.isSelfPayment);
console.log(stud5.isSelfPayment);
console.log(stud6.isSelfPayment);
console.log(stud7.isSelfPayment);
console.log(stud8.isSelfPayment);
console.log(stud9.isSelfPayment);
console.log(stud10.isSelfPayment);


// ______________________________________________________________________________________________________________________exercise 2

// class CustomString {
//     constructor() {}

//     reverse(str) {
//         let result = '';
//         for (let i = str.length-1; i >=0; i--) {
//             result += str[i];
//         }
//         return result;
//     }  

//     ucFirst(str) {
//         let result = str[0].toUpperCase() + str.slice(1);      
//         return result;
//     }

//     ucWords(str) {
//         let innerArr = str.split(" ");
//         let result = [];

//         for (let ch of innerArr) {
//             let innerStr = ch[0].toUpperCase() + ch.slice(1); 
//             result.push(innerStr);
//         }
//         return result.join(' ')
//     }
    
// }

// const myString = new CustomString();

// console.log(myString.reverse('qwerty'));
// console.log(myString.ucFirst('qwerty'));
// console.log(myString.ucWords('qwerty qwerty qwerty'));

// ______________________________________________________________________________________________________________________exercise 3