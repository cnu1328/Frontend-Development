const light = document.querySelector('button');
const body = document.querySelector('body');
let flag = true;

const controller = new AbortController;

// alert("message my name;")

// const str = "string";
// console.log(str);

const browzerType = "chatGPT GPT";

console.log(browzerType.slice(4));

console.log(browzerType.toLowerCase());
console.log(browzerType.toUpperCase());

console.log(browzerType.replace("chat", "Doit"));
console.log(browzerType.replace(" ", "Do"));


if(browzerType.includes("GPT")) {
    const index = browzerType.indexOf("GPT");
    console.log(browzerType.indexOf("GPT", index + 1));
}

else {
    console.log("Not Found");
}

// light.addEventListener("click", 
//     () => {
//         const ranCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//         body.style.backgroundColor = ranCol;
//     },
//     {signal : controller.signal}
    
// );
light.focus();

function greet() {
    const name = prompt("What is your name?");
    const greeting = document.querySelector('.greeting');
    greeting.textContent = `Hello ${name}, How are you?`;
}

function random(num) {
    return Math.floor(Math.random()*(num+1));
}

light.addEventListener('click', changeLight);

function changeLight(e) {

    const ranCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = ranCol;
    console.log(e);

    // if(flag === true) {
    //     flag = false;
    //     body.style.backgroundColor = "lightgreen";
    // }

    // else {
    //     flag = true;;
    //     body.style.backgroundColor = "gray";
    // }
    //greet();
}

//light.removeEventListener('click', changeLight);