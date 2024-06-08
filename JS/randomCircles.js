const btn = document.querySelector('.update');
const canvas = document.querySelector('canvas');
const context = canvas.getContext("2d");



// document.addEventListener("DOMContentLoaded", () => {
//     canvas.width = document.documentElement.clientWidth;
//     canvas.height = document.documentElement.clientHeight;
// });

btn.addEventListener('click', draw);

function random(num) {
    return Math.floor(Math.random()*num);
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for(let i=0; i<10; i++) {
        context.beginPath();
        context.fillStyle = "rgba(12, 130, 13, 0.5)";
        context.arc(random(canvas.width),
                    random(canvas.height),
                    random(50),
                    0, 2*Math.PI);
        context.fill();
        
    }
}



const calculate = document.querySelector(".calculate");
const clear = document.querySelector(".clear");
const result = document.querySelector(".results");

function calculation() {
    result.innerHTML = "";
    for(let i=1; i<=10; i++) {
        const newLine = `${i} x ${i} = ${i*i}<br>`;
        result.innerHTML += newLine;
    }

    result.innerHTML += "<br>Fininshed";
}

calculate.addEventListener('click', calculation);

clear.addEventListener('click', () => result.textContent = "");


const text = document.getElementById("search");
const searchButton = document.getElementById("SearchButton");
const para = document.querySelector(".result");

const Contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
  "Srinu:3213242"
];

searchButton.addEventListener('click', () =>{
    const searchName = search.value.toLowerCase();
    search.value = "";
    search.focus();

    para.textContent = "";

    for(const contact of Contacts) {
        const splitName = contact.split(':');

        if(splitName[0].toLowerCase() === searchName) {
            para.textContent = `${splitName[0]}\'s number is : ${splitName[1]}`;
            break;
        }

        if(para.textContent === "") {
            para.textContent = "Contact Not Found";
        }

    }
});

const countDown = document.querySelector(".CountDown");
const count = document.querySelector(".count");

countDown.addEventListener('click', () => {
    
    count.innerHTML = "";
    for(let i= 10; i>=0; i--) {
        const para = document.createElement('p');
        if(i === 0) {
            para.textContent = "Blast Off!";
        } 
              
        else {
            para.textContent = `CountDown ${i}`;
        }

        count.appendChild(para);
    }
    
});

const peoples = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admit = document.querySelector('.admit');
const refuse = document.querySelector('.refuse');

admit.textContent = "Admit : ";
refuse.textContent = "Refuse : ";
for(const people of peoples) {
    if(people === "Lola" || people === "Phil")
        refuse.textContent += people + " ";
    else 
        admit.textContent += people + "  ";
}
