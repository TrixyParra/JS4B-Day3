console.log("hello world", true, 1, [1, 2, 3], {a: 1, b:2})

console.log(1057 * 189);

document.querySelector('h1').innerHTML = 1057 * 189;  // shows it on HTML page on Live Server 


// Data Types 

console.log('this will run'); 
/*console.log('this will run too'); */
console.log('this will run as well'); 

// Strings
'string'; 
"double quotes"; 
`back ticks`;

// Numbers 
1;  // integer 
1.1;  // float 

// Boolean 
true;  // 1, yes 
false;  // 0, no 

// Complex Data Types (compound data types) (organize data) 

array = [];  // array is a list of values; 
object = {};  // object is a list of key value pairs; (dictionary); 

{
    js: 'javascript, a programming language for the web'
}

const whatIsThis = document.querySelector('h2'); 
whatIsThis.innerHTML = "this is a string";  // shows it on HTML on Live Server 
// this is an element 
// an element is an object 
console.dir(whatIsThis); 

let score = 0; 
console.log(score + 10);  // 10 
console.log(score);  // 0 
console.log(score += 10);  // 10
console.log(score);  // 10
score += 1; 
score += 1;  // this will add both line 49 and 50 until logged on the console again 
console.log(score);  // 12 

// - -= subtract 
// * *= multiply 
// / /= divide 
// % %= module 

// Modulus 
console.log(7 % 5);  // 2
console.log(12 % 5);  // 2  // loop? 


// Template Literals ${____} 
const noun = 'friend'; 
const catchphrase = `I am a ${noun}.`;  // I am a friend.  // nested 
console.log(catchphrase);  // to console a variable - no type of quotations in paranethesis 
let story = `It has been said that a dog is man's best ${noun}.`;   
console.log(story);  // It has been said that a god is a man's best friend. 