// everything in here is JavaScript
//  <<< this is a comment

console.log("Hello World");

// variables
// variableName = variableValue
var nuclearGreen = "#7cfc00";

// we can change some variables
nuclearGreen = "#FF00FF";

// let
let total = 0;
total = total + 1;

// const - stands for CONSTANT
// a constant CANNOT change
const daysInYear = 365;
// THIS CANNOT BE REASSIGNED

// camelCase - <<< CONVENTION
// eachWordInCamelCaseGetsACapitalLetter

// snake_case_looks_like_this

// STRING
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


// NUMBERS
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


// FUNCTION
let subtotal = 0;

function increaseSubtotal() {
    // inside of here are the instructions to follow once the fn is called
    subtotal++;
    console.log(`The subtotal is currently: ${subtotal}`);
}

// can call a fn like so:
increaseSubtotal()

// RETURN AT 11:45 EST
// RETURN AT 11:45 EST
// RETURN AT 11:45 EST
// RETURN AT 11:45 EST
// RETURN AT 11:45 EST
// RETURN AT 11:45 EST
// RETURN AT 11:45 EST
// RETURN AT 11:45 EST
// RETURN AT 11:45 EST