/* Review */

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
whatIsThis.innerHTML = "this is a string";  // this is a string  - shows it on HTML on Live Server 
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


/* Second half of Class */ 


// .length
console.log(
    'hello my name is...'.length  // 19  - shows how many characters long everything within quotes is 
)

// .toUpperCase()
console.log(
    'hello my name is...'.toUpperCase()  // HELLO MY NAME IS...  - makes everything upper case 
)

// .slice(_, _) 
console.log(
    'hello my name is...'.toUpperCase().slice(1,5)  // ELLO  - slice from 1 to 5 but 5 is not counted, 1st character is 0 
)

// [] character
console.log(
    'hello my name is...'[0]  // h  - [] can also show character of number asked for inside the brackets 
)

// .blink() 
document.querySelector('h3').innerHTML = 'Hello my name is..'.blink()  // deprecated 
const answer = 'Hello' 
document.querySelector('h4').innerHTML = answer;  // Hello  - shows on HTML page 
console.log(answer);  // Hello  - shows n console 

// .charCodeAt(_) 
const secondAnswerExample = 'Hello my name is..'.charCodeAt(0)   
document.querySelector('h5').innerHTML = secondAnswerExample;  // 72  - where number in [] character lands
console.log(secondAnswerExample);  // 72 

// two strings
const insertName = 'Hello my name is...' + 'Trixy'; 
document.querySelector('h6').innerHTML = insertName;  // Hello my name is...Trixy 
console.log(insertName);  // Hello my name is...Trixy 

// .concat('', '') 
const concatExample = 'Hello my name is...'.concat('Trixy.', ' Hey.')  // other form to connect strings 
document.querySelector('p').innerHTML = concatExample;  // Hello my name is...Trixy. Hey. 
console.log(concatExample);  // Hello my name is...Trixy. Hey.

// .endsWith('')
const endsWithExample = 'Hello my name is...'.endsWith('is...'); 
document.querySelector('section').innerHTML = endsWithExample;  // true  - comes back as true
console.log(endsWithExample);  // true 

const endsWithExampleTwo = 'Hello my name is...'.endsWith('the end.'); 
document.querySelector('b').innerHTML = endsWithExampleTwo;  // false  - comes back as false
console.log(endsWithExampleTwo);  // false 

// .startsWith('') 
const startsWithExample = 'Hello my name is...'.startsWith('Hello my name');  // .startsWith('Hi'); - false 
document.querySelector('em').innerHTML = startsWithExample;  // true  - comes back as true
console.log(startsWithExample);  // true 

const title = 'My page';    // 'My page!' - false for second <li> 
const page = `
<h1>${title}</h1>
<p>this is a paragraph</p>
<p>this is another paragraph</p>
<ul>
    <li>this is a list item</li>
    <li>${title.endsWith('page')}</li> 
</ul>
`//.includes('this is a list item');  // true  - on console and html 
//.indexOf('blue');  // -1  - no blue 
//.indexOf('this is a list item');  // 91 
document.querySelector('body').innerHTML = page; 
console.log(page);  // everything on "const page= ___" shows on console 

// decimal number with template literal  `.${___}`  
const pageTwo = 'My page!';
const value = 9; 
const answerEx = `.${value}`; 
document.querySelector('body').innerHTML = answerEx;  // .9 
console.log(answerEx);  // .9 

// .padStart(_, '_')  - two digits instead of single digit answer 
const valueTwo = '5'; 
const answr = `.${valueTwo.padStart(2, '0')}`; 
document.querySelector('body').innerHTML = `<h1>${answr}</h1>`;  // .05  - in h1 element 
console.log(answr);  // .05 

// .repeat(_) 
const valueThree = '10'; 
const answerThree = `.${valueThree.repeat(10)}`; 
document.querySelector('body').innerHTML = answerThree;  // .10101010101010101010  - repeats (10) 10 times 
console.log(answerThree);  // .10101010101010101010 

// .replace('', '') 
const valueFour = '10'; 
const answerFour = `.${valueFour.replace('0', 'x')}`; 
document.querySelector('body').innerHTML = answerFour;  // .1x  - replaces 0 with x 
console.log(answerFour);  // .1x 

