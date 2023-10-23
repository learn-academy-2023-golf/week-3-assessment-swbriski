// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe ("fibonacciSequence", () => {
  it("Takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.", () => {
    expect(fibonacciSequence(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacciSequence(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    expect(fibonacciSequence(2)).toEqual("Error, the requested value must be a number greater than 2")
  })
})

// b) Create the function that makes the test pass.

// Pseudo code:
  // fibonacci sequence: beginning with the third number in the sequence, each number is equivalent to the sum of the previous two numbers
  // create a function called fibonacciSequence
    // input: number; replaces parameter named "sequenceLength"; represents length of desired array
      // output: array with the desired number of values from the fibonacci sequence
    // Create an array called fibonacciBase that is equivalent to [1, 1]; these are the initial two values of the fibonnacci sequence and are required to make the sequence work
    // Create a decision tree
      // if input is not a number OR if the input is 2 or less
        // return an error
      // else, use a for loop
        // .push a value into fibonacciBase that is equivalent to the sum of the previous two numbers
        // return new fibonacciBase

const fibonacciSequence = (sequenceLength) => {
  var fibonacciBase = [1, 1]
  if (typeof sequenceLength !== 'number' || sequenceLength <=2) {
    return "Error, the requested value must be a number greater than 2"
  } else {
    for (i = 0; i < sequenceLength-2; i++) {
      fibonacciBase.push(fibonacciBase[i]+fibonacciBase[i+1])
    }
    return fibonacciBase
  }
}

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe ("sortObjectValues", () => {
  it("takes in an object and returns an array of the object's values sorted from least to greatest", () => {
      expect(sortObjectValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
      expect(sortObjectValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// b) Create the function that makes the test pass.

// Pseudo code:
  // Create a function called sortObjectValues
    // input: object
      // output: array with the object's values sorted from least to greatest
    // create a variable called objectValues that uses Object.values(); this will create an array containing each of that object's values
      // use .sort() to arrange values in ascending order

const sortObjectValues = (object) => {
  var objectValues = Object.values(object)
  return objectValues.sort((a,b) => a - b)
}