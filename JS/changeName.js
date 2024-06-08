
const button = document.querySelector('button');

button.addEventListener("click", updateName);


function updateName() {
    const name = prompt("Enter a new name");
    button.textContent = `Player 1 : ${name}`;
}

document.addEventListener("DOMContentLoaded", () => {
    //function : it is used to create a new paragraph and appends it to the bottom o the HTML body.
    function createParagraph() {
        const para = document.createElement('p');
        para.textContent = "You clicked the Button!";
        document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll('button');

    for (const button of buttons) {
        button.addEventListener("click", createParagraph);
    }

}); 
