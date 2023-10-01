// var name1 = "jhon";

// function sayhi() {
//     console.log("Hi "+name1);
// }



(function (window) {
    var jhongreeter = {};
    jhongreeter.name = "Jhon";
    var greeting = "Hi "
    jhongreeter.sayhi = function() {
        console.log(greeting+jhongreeter.name);
    }
    window.jhongreeter = jhongreeter;
})(window);