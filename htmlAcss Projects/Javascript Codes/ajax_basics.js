//Event handling
document.addEventListener("DOMContentLoaded",
    function (event) {
        //Unobstrusive event biding
        document.querySelector("button")
            .addEventListener("click",function () {
                $ajaxUtils
                    .sendGetRequest("ajax_names.txt",
                        function (request) {
                            names = request.responseText;

                            document.querySelector("#content")
                                    .innerHTML = "<h2>Hello " + names +"!";
                        });
            });

    }
);