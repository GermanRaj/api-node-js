
// Arrays

// Task 1
const array = [1,2,3]
console.log(array);
console.log(array.length);

// Task 2

const arrayString = ['Hello', 'World!'];
arrayString.push(':)')
console.log(arrayString);

// Task 3

const arrayStr = ['Apple', 'Pear', 'Watermelon'];
arrayStr.pop();
console.log(arrayStr);

// Task 4

let emptyArray = []
emptyArray.push(1);
console.log(emptyArray.length);
emptyArray.push(3);
console.log(emptyArray.length);

// Loops

// Task 1

const arrayOfFiveNumbers = [1,2,3,4,5]
for (let i=0; i<arrayOfFiveNumbers.length; i++) {
    console.log(arrayOfFiveNumbers[i]);
}

// Task 2

const arrayOfSum = [1,2,3,4,5]
let result = 0
for (let i=0; i<arrayOfSum.length; i++) {
    result+=arrayOfSum[i]
}
console.log(result);

// Task 3
const arrayOfThreeNumbers = [3,4,5]
let newArray = []
for (let i=0; i<arrayOfThreeNumbers.length; i++){
    let newNumber = arrayOfThreeNumbers[i]*2
    newArray.push(newNumber)
}
console.log(newArray)

// Task 4

const arrayOfThree = [10,20,30]
let newArrayOfThree = []
for (let i=2; i>=0; i--) {
    newArrayOfThree.push(arrayOfThree[i]);
}
console.log(newArrayOfThree)

// Tasks For interview

// Task 1

const arrayOfNumbers = [1,2,3,12,4,5]
let maxNumber = 0
for (let i=0; i<arrayOfNumbers.length; i++) {
    let chosenNumber = arrayOfNumbers[i];
    if (chosenNumber > maxNumber) {
        maxNumber = chosenNumber;}
}
console.log(maxNumber);

// Task 2

let arrayOfVar = [5,7,9,4,12,0,-10];
let minNumber = arrayOfVar[1];
for (let i=0; i<arrayOfVar.length; i++) {
    if (arrayOfVar[i] < minNumber ) {
        minNumber = arrayOfVar[i];
    }
}
console.log(minNumber);

// Task 3

let randomArray = [1,3,4,5,6,7,8,12,17,19,20,22,23]
let counter = 0
for (let i=0; i<randomArray.length; i++) {
    if (randomArray[i] % 2 === 0) {
        counter++
    }
}
console.log(counter);

// Task 4

let newArrayOfNumbers = [-1,2,-5,7,-9,6,-12,20]
let positiveNumbers = []
for(let i=0; i<newArrayOfNumbers.length; i++) {
    if(newArrayOfNumbers[i] >=0){
        positiveNumbers.push(newArrayOfNumbers[i])
    }
}
console.log(positiveNumbers);





