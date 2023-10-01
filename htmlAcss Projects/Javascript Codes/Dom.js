//DOM(Document object Model) Manipulation

// console.log(document.getElementById("title"));

// console.log(document instanceof HTMLDocument);

document.addEventListener("DOMContentLoaded",
    function (event) {
        
        function sayHello(event) {
            //console.log(event);
            this.textContent = "said it!";
            var name = 
            document.getElementById("name").value;
        
            var message = "<h2>Hello "+ name + "!</h2>";
        
            // document
            //     .getElementById("content")
            //     .textContent = message;
        
            document
                .getElementById("content")
                .innerHTML = message;
        
            if(name === "student"){
                // var title = document.getElementById("title").textContent;
                // By using get element by id, we limited to certain operations
                // But we use quereySelector insted
                // console.log(title);
        
                var title = document
                    .querySelector("#title")
                    .textContent;
                title += " & Lovin' it";
        
                document
                    .getElementById("title")
                    .textContent = title;
            }
        }
        
        // unobstrusive event binding
        
        document.querySelector("button")
                .addEventListener("click", sayHello);

        document.querySelector("body")
                .addEventListener("mousemove",
                    function (event) {
                        if(event.shiftKey === true) {
                            console.log("x : "+ event.clientX);
                            console.log("y : " + event.clientY);
                        }
                        
                    }
                )
        
    }
)




// document.querySelector("button")
//         .onclick = sayHello;
