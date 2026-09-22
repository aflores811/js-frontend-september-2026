// everything in here is JavaScript
//  <<< this is a comment

console.log("Hello World");


// VARIABLES ///////////////////////////////////////////////////

// variableName = variableValue
var nuclearGreen = "#7cfc00";

// we can change some variables
nuclearGreen = "#FF00FF";

// let - for info that will change
let total = 0;
total = total + 1;

// const - stands for CONSTANT
// a constant CANNOT change
const daysInYear = 365;
// THIS CANNOT BE REASSIGNED

// camelCase - <<< CONVENTION
// eachWordInCamelCaseGetsACapitalLetter

// snake_case_looks_like_this

// STRING //////////////////////////////////////////////////////
// strings tend to be for text
const someString = " qwertyuiopasdfghjklzxcvbnm[];',./`1234567890-=`' ";

// strings can use single quotes:
const withSingleQuotes = 'I am a string';

// strings can use double quotes:
const withDoubleQuotes = "I am also a string";

// strings can use backtics:
const withBacktics = `Also also a string`;

// concatenation:
const withConcat = "string one" + "string two";
// "string onestring two"

// interpolation
// YOU HAVE TO USE BACKTICS FOR INTERPOLATION

const whatever = "I am whatever";

const newString = `I can write whatever in the backtics and then interpolate like so: ${whatever}`;

const adjective = "funky";
const nounOne = "monkey";
const nounTwo = "lake";

const madlibs = `The quick ${adjective} ${nounOne} jumped over the lazy ${nounTwo}`; 
// "The quick funky monkey jumped over the lazy lake" 


// NUMBERS /////////////////////////////////////////////////////
1 + 1   // 2
2 - 3   // -1
3 * 4   // 12
12 / 4  // 3

// floating point numbers of FLOATs
2.5

// negative numbers
-100

// NaN stands for Not a Number
1 - "something" // NaN


// BOOLEAN - true or false
true
false
// used extensively in conditionals


// FUNCTION //////////////////////////////////////////////////
let subtotal = 0;


function increaseSubtotal() {
    // inside of here are the instructions to follow once the fn is called
    subtotal++;
    console.log(`The subtotal is currently: ${subtotal}`);
    return subtotal
}


// can call a fn like so:
increaseSubtotal()

// INPUT & OUTPUT

function addition() {
    return 1 + 1
} // return will OUTPUT the value from the fn
// this way we can take the result and do something with it

function multipleReturns() {
    return "I am the first return"
    return "I am the second return"
    return "I am the third return"
}

// parameter -- stand in for data we will add to the fn later
function proverbLibs(numberOne, nounOne, numberTwo, nounTwo) {
    return `${numberOne} in the ${nounOne} is worth ${numberTwo} in the ${nounTwo}`
}

function capitalizeFirstLetter(somestring) {
    const firstLetter = somestring.charAt(0)
    const capFirstLetter = firstLetter.toUpperCase()
    const otherLetters = somestring.slice(1)
    return capFirstLetter + otherLetters
}


// CONDITIONALS ////////////////////////////////////////////////

// booleans:
true
false

if (true) {
    // do something if `true`
} else {
    // do something else if `false`
}

function subtotalAboveTen() {
    if (subtotal > 10) {
        subtotal = 0
        return subtotal
    } else {
        return "Not above 10, waiting to reset..."
    }
}

let coffeesBought = 0

function buyCoffee() {
    coffeesBought += 1

    if (coffeesBought < 10) {
        return "Enjoy your coffee"
    } else {
        coffeesBought = 0
        return "Have a free coffee on us!"
    }
}

function whatIsIt(val) {
    if (typeof val === "string") {
        return "This is obviously a string"
    } else if (typeof val === "number") {
        return "This is so definitely a number"
    } else if (typeof val === "boolean") {
        return "Well I mean it's a boolean"
    } else if (typeof val === "undefined") {
        return "It's undefined a.k.a. nothing"
    } else {
        return "It's something ELSE!"
    }
}

// block - the instructions / code inside of the curly braces {}

// TRUTHINESS //////////////////////////////////////////////////

if ( 10 ) {
    console.log("ITS TRUE"); // this will trigger bc 10 is truthy!
} else {
    console.log("ITS FALSE");
}

// easiest way to tell if something is truthy / falsey is with Boolean()

Boolean(undefined) // false
Boolean(10) // true
Boolean(null) //false
Boolean("hello") // true
Boolean("") // false
Boolean("     ") // true --- spaces are still characters!

// some falsey values:
"" // empty string
0
NaN
undefined
null
false




// EXERCISES //////////////////////////////////////////////////


function isItCake(str) {
    // accepts a string `str`
    // if the string is "cake" return true
    // BONUS: if the string includes "cake" return true
    // BONUS BONUS: same as above but it ignores uppercase/lowercase
}


let bagels = 0

function packBagel() {
    // accepts no arguments
    // increase bagels by one
    // if bagels is less than 13: returns "We have X bagels. We need more"
    // if bagels is 13: returns "We have a baker's dozen."
    // if bagels is over 13: returns "We have X bagels. That's too many."
}


function isEven(num) {
    // accepts a number `num`
    // return `true` if the number is even
    // return `false` if the number is odd
    // you will need to look up a special operator % to do this!
}


let priceTotal = 0

function addPriceItem(price, discountCode) {
    // accepts a number `price`
    // adds the price to the `priceTotal`
    // return the result of the `priceTotal`
    // BONUS: if a `discountCode` exists, give a discount of 50% for the item (divide `price` by 2)
}