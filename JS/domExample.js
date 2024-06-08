
const link = document.querySelector('a');
const section = document.querySelector("section");


link.textContent ="Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const para = document.createElement("p");
para.textContent = "We hope You Enjoyed The Ride";
section.appendChild(para);
para.setAttribute('class', 'highlight');

const text = document.createTextNode("— the premier source for web development knowledge.");

const para1 = document.querySelector('p');
para1.appendChild(text);

para1.parentNode.removeChild(para1);

// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";

