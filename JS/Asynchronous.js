
// const name = 'Srinu';
// console.log(`My name is ${name}`);



function greet(name) {
    return `My name is ${name}`;
}

const name = "Srinu";

const greeting = greet(name);
console.log(greeting);  

const generate = document.querySelector('#generate');
const reload = document.querySelector('#reload');

const MAX_PRIME = 1000000;

function isPrime(n) {
    for(let i=2; i<=Math.sqrt(n); i++) {
        if(n%i == 0) 
            return false;
    }

    return n>1;
}

const random = (max) => Math.floor(Math.random() * max);


function generatePrimes(quota) {
    const primes = [];
    while(primes.length < quota) {
        const candidate = random(MAX_PRIME);

        if(isPrime(candidate)) {
            primes.push(candidate);
        }
    }

    return primes;
}

const quota = document.querySelector('#quota');
const output = document.querySelector('#output');

generate.addEventListener('click', () => {
    const primes = generatePrimes(quota.value);
    output.textContent = `Finished generating ${quota.value} Pries!`;
});

reload.addEventListener('click', () => {
    document.location.reload();
});



const log = document.querySelector('.event-log');

document.querySelector("#xhr").addEventListener("click", () => {
    
    log.textContent = "";

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('loadend', () => {
        log.textContent = `${log.textContent} Finished with status : ${xhr.status}`;
    });

    xhr.open(
        "GET", 
        "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
    );

    xhr.send();
    log.textContent = `${log.textContent} Started XHR Request\n`;
});

document.querySelector('#reload1').addEventListener("click", () => {
    log.textContent = "";
    document.location.reload();
});


//Callback

function doStep1(init, callback) {
    const result = init+1;
    callback(result);
}

function doStep2(init, callback) {
    const result = init+2;
    callback(result);
}

function doStep3(init, callback) {
    const result = init +3;
    callback(result);
}

function doOperation() {
    doStep1(0, (result1) => {
        doStep2(result1, (result2) => {
            doStep3(result2, (result3) =>{
                console.log(`Result :  ${result3}`);
            });
        });
    });
}

doOperation();
// function doStep1(init) {
//     return init+1;
// }

// function doStep2(init) {
//     return init+2;
// }

// function doStep3(init) {
//     return init+3;
// }

// function doOperations() {
//     let result = 0;
//     result = doStep1(result);
//     result = doStep2(result);
//     result = doStep3(result);

//     console.log(`result : ${result}`);
// }


// doOperations();


//Using fetch() API

const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//     console.log(`Received Response : ${response.status}`);
// });


// console.log("Request Started...");

//Chaining Promises

// fetchPromise.then((response) => {
//     const jsonPromise = response.json();
//     jsonPromise.then((data) => {
//         console.log(data[0]);
//     });
// });

//The same way to use

// fetchPromise 
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data[1]);
//     });

//Throwing errors when it wasnt ok;

fetchPromise    
    .then((response) => {
        if(!response.ok) {
            throw new Error(`Http Error : ${response.status}`);
        }

        return response.json();
    })
    .then((data) => {
        console.log(data[0]);
    })

    //catching Erros
    .catch((error) =>{
        console.log(`Colud not get Errors ${error}`);
    });

// const fetchPromise1 = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );
    
// const fetchPromise2 = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
// );
    
// const fetchPromise3 = fetch(
//     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
// );

// Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
//     .then((responses) => {
//         // if(!responses.ok) {
//         //     throw new Error(`Http Error ${response.status}`);
//         // }

//         for(const response of responses) {
//             console.log(`${response.url} : ${response.status}`);
//         }
//     })

//     .catch((error) => {
//         console.error(`Failed to fecth : ${error}`);
//     });

async function fetchProducts() {
    try {
        // after this line, our function will wait for the `fetch()` call to be settled
        // the `fetch()` call will either return a Response or throw an error

        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );

        if(!response.ok) {
            throw new Error(`HTTP error : ${response.status}`);
        }

        // after this line, our function will wait for the `response.json()` call to be settled
        // the `response.json()` call will either return the parsed JSON object or throw an error

        const data = await response.json();
        return data;
        //console.log(data[1]);
    } catch(error) {
        console.error(`Could not get Products : ${error}`);
    }
}

//fetchProducts();
const promise = fetchProducts();
promise.then((data) => console.log(data[0].name));
