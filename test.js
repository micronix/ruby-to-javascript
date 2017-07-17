console.log("hello world");

// this is a comment

var a = 10; // integer
var b = 3.14; // float
var c = true; // boolean
var d = "this is a string"; // string
var e = 'this is another string'; // string

if (a > 5){
    console.log("hello");
} else {
    console.log("other");
}

var a = [1,2,3];
a.push(6); // add 6 to the end of the array

console.log(a[1]);

for(var i = 0; i < a.length ; i++){ // i++ is equivalent to i += 1 or i = i + 1
    console.log(a[i]);
}

// no hashes in javascript
// javascript object
var h = {};
h['a'] = 10;
console.log(h['a']); // access the value 10 by passing the key 'a'
console.log(h.a); // access the value 10 by calling the attribute a

// methods

function foo(){
    console.log('inside foo');
}
foo();

function bar(a, b){
    console.log(a, b);
}


// DOM inside the browser