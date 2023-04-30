//Write a JavaScript program to print the 
//even numbers between 1 and 20 using a for loop.

const evenArr = []
for (let index = 1; index <= 20; index++) {
    if (index % 2 === 0) {
        evenArr.push(index) 
    }
}
console.log(evenArr)


//Write a JavaScript program to print the numbers from 1 to 10 using a for loop.
const tenArr  = []
for (let index = 1; index <= 10; index++) {
    tenArr.push(index); 
}
console.log(tenArr)


//Write a JavaScript program to print the numbers from 1 to 50.
//But for multiples of 3, print "Fizz" instead of the number,
// and for the multiples of 5, print "Buzz". For numbers which
// are multiples of both 3 and 5, print "FizzBuzz".
const tillFifty = []
for (let index = 1; index <= 50; index++) {
   if (index % 3 === 0 && index % 5 === 0) {
    tillFifty.push("FizzBuzz") 
   }   else if (index % 3 === 0) {
    tillFifty.push("Fizz")
   } else if (index % 5 === 0) {
    tillFifty.push("Buzz")
   }else tillFifty.push(index)
}
console.log(tillFifty)

//Write a JavaScript program to calculate the sum of the numbers from 1 to 5 using a while loop.
let i = 1
let sum =0
while (i<= 5) {
    sum += i;
    i++;
}
console.log("The sum of numbers from 1 to 5 is: " +sum)

//Write a JavaScript program to find the sum of all odd numbers from 1 to 1000.
//loops

//5.
let sum1 = 0
for (let index = 1; index <= 1000; index++) {
    if (index % 2 === 1) {
        sum1 += index
    };  
}
console.log(sum1)

//6.
let multiple = prompt("enter a number between 1-10")
let multipleTable = []
for (let j = 1; j <= multiple; j++) {
    for (let i = 1; i <= multiple; i++) {
        multipleTable[i-1] = i*j;
    };
    console.log(multipleTable)
}

//7.
const colors = ["red", "green", "blue"]
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//8.
let integer = prompt("enter a positive number")
let product = 1
for (let i = 1 ; i <= integer; i++) {
    product *= i;
}
console.log(product)


//Arrays
let wordsArray = ['jbcds', 'dkoa', 'lowmnx', 'shbcma', 'xksosm']
const numbersArray = [1, 2, 2, 4, 5, 6]

//1.

console.log(wordsArray.sort())

//2.

console.log(numbersArray.filter(number => number % 2 === 0))

//3.
const stringAray = ['jagcb', 'jgcs', 'sjkcgb']
const countString = stringAray.map(string => string.length)
console.log(countString)

//4.
const multipleTwo = numbersArray.map(number => number * 2)
console.log(multipleTwo)

//5.
let sum = numbersArray.reduce((a, b)=> a+b)
console.log(sum)

//6.
const alphabeticSorted = wordsArray.sort()
console.log(alphabeticSorted)

//7.
function removeDuplicates(arr) {
    let uniqueArr = [];
    arr.forEach(function (item) {
        if(uniqueArr.indexOf(item) === -1){
            uniqueArr.push(item)
        }
    });
    return uniqueArr;
}
let uniqueArr = removeDuplicates(numbersArray)
console.log(uniqueArr)

//8.
let detailsArr = [{name: "yoo", age: 15}, {name: "too", age: 18},{name: "hoo", age: 25}]
let resultArr = detailsArr.filter(obj => obj.age >= 18)
console.log(resultArr)

//objects
//1.
function createPerson(firstName, lastName, age) {
    return  {
    firstName: firstName,
    lastName: lastName,
    age: age,
    getFullName: function () {
        return this.firstName + " " + this.lastName;  
     }
 }
};

const person1 = createPerson("noha", "cohen", 15);
console.log(person1.getFullName())

//2.
function countChars(word) {
    const charCount = {};
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (charCount [char]) {
            charCount[char]++;
        }else{
            charCount[char] = 1;
            }    
        }
        return charCount;
    }

console.log(countChars("hello"))

//3.
function getValue(obj, key) {
    if (key in obj) {
        return obj[key]
    }
        return null;
    }

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}

console.log (getValue(person, "firstName"))
console.log (getValue(person, "email"))

//4.
let cuounter = {
    count: 0,
    increment: function(){
        this.count++;
    },
    reset: function(){
        this.count = 0;
    }
}

//5.
function averagePrice(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}
console.log(averagePrice([85, 32, 10, 5, 8]))

//6.
let rectangle = {
    width: 8,
    height: 3,
    area: function () {
        return this.width*this.height;  
    }
}
console.log(rectangle.area())

//7.
let book = {
    title: "dfbfgdb",
    author:"yes",
    year:"1335",
    getInfo: function() {
        return this.title + " by" + this.author + " (" + this.year + ")";
    }
};
console.log(book.getInfo())

//9.
function sortScores(arr) {
    arr.sort(function (a, b) {
        return b - a
    })
    return arr
}

console.log(sortScores([5,2,5,9,6,3]))
