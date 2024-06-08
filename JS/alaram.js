const alaram = document.querySelector('#alaram');
const output = document.querySelector('.output');
const delay = document.querySelector('#delay');
const name = document.querySelector('#name');

//with asynchronous function ans await

function setAlaram(person, delay) {
    return new Promise((resolve, reject) => {
        if(delay < 0) {
            throw new Error("Alaram Delay must not be negative");
        }

        setTimeout(() => {
            resolve(`Wake Up, ${person}!`);
        }, delay);
    });
}

alaram.addEventListener('click', async () => {
    try {
        const message = await setAlaram(name.value, delay.value);
        output.textContent = message;
    } catch(error) {
        output.textCotnet = `Couldn't Set Alaram : ${error}`;
    }
});




// function setAlaram(person, delay) {
//     return new Promise((resolve, reject) => {
//         if(delay < 0) {
//             throw new Error(`Alaram must not be negative`);
//         }

//         setTimeout(() => {
//             resolve(`Wake Up! ${person}`);
//         }, delay);
//     });

// }

// alaram.addEventListener('click', () => {
//     setAlaram(name.value, delay.value)
//         .then((message) => (output.textContent = message))
//         .catch((error) => (output.textContent = `Couldn't set Alaram : ${error}`));
// });

// function setAlaram(name, delay) {

//     return new Promise((resolve, reject) => {
//         if(delay < 0) {
//             throw new Error("Alaram delay must not be negative");
//         }

//         setTimeout(() => {
//             resolve(`Wake Up! ${name}`);
            
//         }, delay);
    
//     });
    
// }

// alaram.addEventListener('click', setAlaram("srinu", 1000));