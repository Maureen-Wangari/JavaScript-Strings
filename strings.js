//QuesstionA
let location = "extravaganza";
console.log('location:',location[8]);
console.log('location:',location[9]);
console.log('location:',location[10]);
console.log('location:',location[11],);

//OR
console.log('location:',location[8], 'location:',location[9], 'location:',location[10], 'location:',location[11]);


//questionB
let food = "The quick fox jumped over the lazy dog"
const insert = ('output', food.slice(0,4) + "eat" + food.slice(4));
console.log('insert:', insert);


//QuestionC
const story = "The quick brown fox jumps over the lazy fox"
console.log(('story:', story.match(/the/)).length);
console.log(('story:', story.match(/brown/)).length);

//QuestionD
const string1 = "The pupils are reading in the library"
console.log(string1.search(/are/));
const string2 = "The child was sitting on the table before it fell"
console.log(string2.search(/sitting/));

//QuestionE
let a = "wonderful"
console.log('a:', a.toUpperCase());

let b = "amazing"
let c = "undERneath"
console.log('b',  b.toLowerCase());
console.log('c',  c.toLowerCase());

