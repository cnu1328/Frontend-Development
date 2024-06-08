const body = document.querySelector('body');

function displayMessage(msgText, msgSymbol) {
    const panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');

    body.appendChild(panel);


    const msg = document.createElement('p');
    

    if(msgSymbol === 'warning') {
        msg.style.backgroundImage = 'url(../Assests/icons/warning.png)';
        msg.style.backgroundColor = 'red';
    } else if(msgSymbol === 'chat') {
        msg.style.backgroundImage = 'url(../Assests/icons/chat.png)';
        msg.style.backgroundColor = 'aqua';
    } else{
        msg.style.paddingLeft = "20px";
    }

    msg.textContent = msgText;//'This is message Box';

    panel.appendChild(msg);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.addEventListener('click', () => panel.parentNode.removeChild(panel));

}
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    //displayMessage("Your inbox is almost full — delete some mails", "warning");
    displayMessage("Brian: Hi there, how are you today?", "chat");
});


