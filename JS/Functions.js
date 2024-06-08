
const body = document.querySelector('body');
const head = document.createElement('h2');
const para = document.createElement('p');
body.style.textAlign = "center";

head.textContent = "Built-In Functions"

body.appendChild(head);

const myText = "I am a string";
const newString = myText.replace("string", "sausage");
para.textContent = newString;
body.appendChild(para);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string

const para1 = document.createElement('p');
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
para1.textContent = madeAString;
body.appendChild(para1);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string


function hello(name = "Chris") {
    console.log(`Hello ${name}!`);
}
  
hello("Ari"); // Hello Ari!
hello(); // Hello Chris!

(function () {
    alert("hello");
});

function logKey(event) {
    console.log(`You pressed "${event.key}".`);
}
  
// textBox.addEventListener("keydown", logKey);

const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]



const textBox = document.querySelector("#textBox");
const output = document.querySelector(".output");

textBox.addEventListener('keydown', event => {
    output.textContent = `You Pressed the key "${event.key}".`;
});

// const x = 1;

// function a() {
//     const y = 2;
// }

// function b() {
//     const z = 3;
// }

// function out(value) {
//     const para = document.createElement('p');
//     document.appendChild(para);
//     para.textContent = `value : ${value}`;
// }

// out(x);

  
  



