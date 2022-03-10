/*
  Some of the following questions will ask you to use
  arrow function syntax. On the problems that don't,
  feel free to practice with any syntax.
*/


////////////////// PROBLEM 1 ////////////////////
/*
  Create a function called helloWorld which simply console logs 'Hello, World!'
  Call the function.
*/

//CODE HERE
let sep = `-----------------------`
console.log(sep)
console.log(`Problem 1:`)

function helloWorld() {
  console.log(`Hello, World!`)
}
helloWorld()

console.log(sep)

////////////////// PROBLEM 2 ////////////////////

/*
    Write an arrow function called 'jsNinja' that returns the string: 'I am a JavaScript ninja!'
*/

//CODE HERE
console.log(`Problem 2:`)

const sayBye = () => {
  return `I am a JavaScript ninja!`
}

let x = sayBye()
console.log(x)

console.log(sep)


////////////////// PROBLEM 3 ////////////////////
/*
  Create a function called printName which takes in a person's name and console logs it.
  Ex. If 'Cameron' were passed in as the argument, Cameron would be console logged.
  Call the function, passing in an argument.
*/

//CODE HERE
console.log(`Problem 3:`)

const printName = (yourName) => {
  console.log(yourName)
}

printName(`Cameroon`)

console.log(sep)


////////////////// PROBLEM 4 ////////////////////
/*
  Create a function called greeting that
  accepts name as its only parameter.
  Convert the name param into a string.
  greeting should log the string 'Hello, '
  plus the value of the name parameter.
  Ex. If Jake were passed in as the argument, the function would log 'Hello, Jake'
  Make sure to call your function and pass in an argument.
*/

//CODE HERE
console.log(`Problem 4:`)

const greeting = (aName) => {
  const aNameString = String(aName)
  console.log(`Hello, ${aNameString}`)
  // console.log(typeof(aNameString))
}

greeting(`Jake`)

console.log(sep)

////////////////// PROBLEM 5 ////////////////////

/*
    Write an arrow function called 'compareNums' that takes in 2 parameters, 
    which will be numbers. 
    The function should return the bigger number. 
    If the numbers are the same, just return the number.

    Brownie points if you use a ternary statement (only spend significant time on this if you have wiggle room)
*/

//CODE HERE
console.log(`Problem 5:`)

const compareNums = (num1, num2) => {
  if (num1 > num2) {
    console.log(`${num1} is bigger`)
    return num1
  } else if (num2 > num1) {
    console.log(`${num2} is bigger`)
    return num2
  } else {
    console.log(`Hey, that's the same number.`)
    return num1
  }
}

result = compareNums(2, 2)
console.log(result)

console.log(sep)

////////////////// PROBLEM 6 ////////////////////
/*
  Create a function called add that takes in two parameters 
  Inside, convert the arguments to be numbers (just in case strings get sent in)
  The add function should RETURN the two parameters added together.
  Create a variable outside the function called 'sum' and set it equal to add invoked (called), passing in 2 arguments.
*/

//CODE HERE
console.log(`Problem 6:`)

const add = (param1, param2) => {
  let numb1 = Number(param1)
  let numb2 = Number(param2)
  console.log(`The sum is ${numb1 + numb2}`)
  return numb1 + numb2
}

sum = add(1, 2)
console.log(sum)

console.log(sep)

////////////////// PROBLEM 7 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/
console.log(`Problem 7:`)

const exclaim = function(str) {
  return str.toUpperCase() + '!!!'
}

// arrow
// declaration
console.log(`This function is an expression`)

console.log(sep)

////////////////// PROBLEM 8 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

console.log(`Problem 8:`)

const exclaimTwo = str => {
  return str.toUpperCase() + '!!!'
}

console.log(`This function is an arrow`)
// declaration
// expression

/*
  Rewrite exclaimTwo to be a single line.
  Call your new function exclaimThree

  Brownie points if you use a template string
*/

const exclaimThree = aThing => `${aThing.toUpperCase()}!!!`
let isThisRight = exclaimThree(`hello`)
console.log(isThisRight)

console.log(sep)

////////////////// PROBLEM 9 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

console.log(`Problem 9:`)

function exclaimFour(str) {
  return str.toUpperCase() + '!!!'
}

// arrow
console.log(`This function is a declaration`)
// expression

console.log(sep)

////////////////// PROBLEM 10 ////////////////////
/*
  Write a function called nameCheck that takes in a name parameter.
  nameCheck should check if the name equals 'Steven'. If it does, return 'What is up Steven?'
  If the name parameter is equal to Bryan, return 'Hey Bryan!'
  If the name parameter is anything else, return 'Cool name, NAMEPARAM' (with NAMEPARAM being the value of the name parameter being passed in).
  Create a variable called 'nameGreeting' and set it equal to your function invoked (called) passing in an argument.
*/

//CODE HERE
console.log(`Problem 10:`)
const nameCheck = nombre => {
  if (nombre === `Steven`) {
    x = `What is up Steven?`
    return x
  } else if (nombre === `Bryan`) {
    x = `Hey Bryan!`
    return x
  } else {
    x = `Cool name, ${nombre}`
    return x
  }
}

nameGreeting = nameCheck(`Bryan`)
console.log(nameGreeting)

console.log(sep)

////////////////// PROBLEM 11 ////////////////////
/*
  Write a function called faveColorFinder that takes in one parameter called color (which will be a string).
  If the passed in color equals 'red', return 'red is a great color'
  If the passed in color equals 'green', return 'green is a solid favorite color'
  If the passed in color equals 'black', return 'so trendy'
  Otherwise, you should return the string 'you need to evaluate your favorite color choice'
  Create a variable called 'colorRating' and set it equal to faveColorFinder invoked (called), passing in an argument.
*/

//CODE HERE
console.log(`Problem 11`)

const faveColorFinder = color => {
  if (color == `red`) {
    return `red is a great color`
  } else if (color == `green`) {
    return `green is a solid favorite color`
  } else if (color == `black`) {
    return `so trendy`
  } else {
    return `you need to evaluate your favorite color choice`
  }
}

colorRating = faveColorFinder(`black`)
console.log(colorRating)

console.log(sep)

////////////////// PROBLEM 12 ////////////////////
let namesArr = ['Cameron', 'Riley', 'Eric', 'Brenna', 'Karl']
/*
  Create a function called printAllNames that takes in a single argument (an array of names).
  Using a for loop, iterate over that array and console log each name.
  Call the function, passing in the `namesArr` array (above).
*/

//CODE HERE
console.log(`Problem 12:`)

const printAllNames = whatever => {
  for (let i = 0; i < whatever.length; i++) {
    console.log(whatever[i])
  }
}

printAllNames(namesArr)

console.log(sep)

////////////////// PROBLEM 13 ////////////////////
/*
  Create a function called thatsOdd that takes in a single argument (a number).
  Using conditional logic, if the number is even, return 'That's not odd!'
  Otherwise, return 'That is odd indeed!'
  Outside the function, create a variable called `oddChecker` and set it equal to your function invoked, making sure to pass in an argument.
*/

//CODE HERE

console.log(`Problem 13:`)

const thatsOdd = gilaBend => {
  if (gilaBend % 2 === 0) {
    return `That's not odd!`
  } else {
    return `That is odd indeed!`
  }
}

oddChecker = thatsOdd(13)
console.log(oddChecker)

console.log(sep)

////////////////// PROBLEM 14 ////////////////////

/*
    Write a one line arrow function called 'bestMovie' that takes in one parameter,
    which will be a string of a movie title. 
    The function should return the string: 'MOVEIEPARAM is the best movie ever!'. 
    For example, if we passed in 'Sharknado', 
    we would expect the function to return 'Sharknado is the best movie ever!'
*/

//CODE HERE
console.log(`Problem 14:`)

const bestMovie = movieTitle => `${movieTitle} is the best movie ever!`

isItTho = bestMovie(`Sharknado`)
console.log(isItTho)

console.log(sep)

////////////////// PROBLEM 15 ////////////////////
let bigOrSmallArray = [1,101, 102, 2, 103, 4, 5, 6, 107]
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr',  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string to the answers array. 
  Return the answers array inside of the function to a variable called `arrayEvaluator`.
*/

//CODE HERE
console.log(`Problem 15:`)

const bigOrSmall = arr => {
  let answers = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 100) {
      answers.push(`big`)
    } else if (arr[i] <= 100) {
      answers.push(`small`)
    }
  } return answers
}

arrayEvaluator = bigOrSmall(bigOrSmallArray)
console.log(arrayEvaluator)

console.log(sep)

////////////////// PROBLEM 16 ////////////////////
let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel']
let loser = 'Glimmer'
/*
  Write a function that is called theEliminator, which takes in two arguments, contestants (which will each be 
    an array of strings), and loser (which will be a string).
  The function should loop over the array of contestant names. If the loser string appears in the array, splice 
  it out. Return the new contestants array.
*/

//CODE HERE
console.log(`Problem 16:`)
const theEliminator = (cont, lost) => {
  for (let i = 0; i < cont.length; i++) {
    // console.log(`${cont[i]} vs. ${lost}`)
    if (cont[i] === lost) {
      let loserBracket = cont.splice(i, 1)
      return cont
    }
  }
}

remaining = theEliminator(contestants, loser)
console.log(remaining)

console.log(sep)

////////////////// PROBLEM 17 ////////////////////
let sampleString = "Hi, my name is Kylo."
/*
  Write a function that takes in one argument, a string. The function should then console.log that string, 
  in entirely uppercase characters.
  Invoke the function, passing in the sampleString (above).
*/

//CODE HERE
console.log(`Problem 17:`)

const yelling = thingToYell => {
  yelledThing = thingToYell.toUpperCase()
  console.log(yelledThing)
}

yelling(sampleString)

console.log(sep)

////////////////// PROBLEM 18 ////////////////////
/*
  Write a function called emailCheck that takes in
  one parameter - email.
  Inside the function, convert the email param into 
  a string and trim off any excess whitespace.
  Check to make sure the email contains an '@' symbol.
  If it does, return 'email verified' and if doesn't, 
  return 'must provide a valid email address'
*/

//CODE HERE
console.log(`Problem 18:`)

const emailCheck = email => {
  stringed = String(email).trim()
  if (stringed.includes(`@` && `.`) === true) {
    return `email verified`
  } else {
    return `must provide a valid email address`
  }
}

atAt = emailCheck(`    Hello  @   . `)
console.log(atAt)

console.log(sep)

////////////////// PROBLEM 19 ////////////////////
/*
  Write a function, naming it whatever you believe to be appropriate, that buys as many chocolate frogs as 
  possible with a certain amount of gold. Each chocolate frog costs 3 gold. Your function should take in a 
  single parameter, which is the amount of gold you are willing to spend. Your function should return a 
  total amount of chocolate frogs you were able to purchase.
  Create a variable called `totalFrogs` and set it equal to your function invoked, passing in the amount of 
  gold you are willing to spend.
*/

//CODE HERE
console.log(`Problem 19:`)

frogCost = 3
willingToSpend = 14

const appropriate = balance => {
  let canBuy = balance / frogCost
  canBuyRounded = Math.floor(canBuy)
  return canBuyRounded
}

totalFrogs = appropriate(willingToSpend)
console.log(totalFrogs)

console.log(sep)

////////////////// PROBLEM 20 ////////////////////
/*
  You might have noticed a slight bug in the previous problem. If you were to pass in 4 gold, the function 
  would return to you 1.3333... However, you can't really go to a store and by 1.333 products. You would 
  just be able to purchase 1 product. Re-write the function you used in the previous problem (give it the 
  same name, just add a 2 to the end of it) that fixes this bug. Invoke the function and store the returned 
  value to a variable called `totalFrogs2`.
*/

//CODE HERE
console.log(`Problem 20:`)

console.log(`I already did this by accident.`)

console.log(sep)

////////////////// PROBLEM 21 ////////////////////
let sampleArray = [0,1,2,3,4,7,5,6,8,9]
/*
  Write a function that takes in an array of numbers as an argument. In the body of the function, write 
  logic to determine if the array is in ascending order. The function should return true, if it is sorted 
  in ascending order, false if it is not. Create a variable, `arrayIsAscending` and set it equal to your 
  function invoked. Use the sample array to test this function.
*/

//CODE HERE
console.log(`Problem 21:`)
let itsAscending = true

const isItAscending = checkMe => {
  for (let i = 0; i < (checkMe.length); i++) {
    if (checkMe[i] > checkMe[i + 1]) {
      itsAscending = false
    }
  } if (itsAscending === true) {
    return `It's ascending.`
  } else {
    return `It's not ascending.`
  }
}


arrayIsAscending = isItAscending(sampleArray)
console.log(arrayIsAscending)

console.log(sep)

////////////////// PROBLEM 22 ////////////////////
console.log(`Problem 22:`)

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

/*
  There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck.
  All within different scopes.
  Given the functions and variables above, edit the arrays below to contain only the appropriate variable names (as strings).
*/

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = [`duck`]
// this should actually be called the "outer scope"

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = [`duck`, `rubberDuck`]

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = [`duck`, `rubberDuck`, `sailorDuck`]

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = [`duck`, `realDuck`]

console.log(
`outer scope = ${globalScope}
bathroom scope = ${bathroomScope}
bathtub scope = ${bathtubScope}
pondScope = ${pondScope}`)

console.log(sep)