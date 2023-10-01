// var name = "Srinivas";
// var age = 19;
// var shootingScore = 45.6;

// var message = "Hi, My name is "+name + " and I am"+age+" old!";

// var firstName = "Srinivas";
// var lastName = "Dharpally";

// var DoB = '22-11-2003';//a string also declared in single quotes
// var age = 19;
// var profileImg = "";

// var loginWelcomeMessage = "Welcome, "+/*concatenated*/firstName+". Happy "+age+"th birthday";

// console.log(loginWelcomeMessage);

// var sum =  10+15;
// var sub = 10-15;
// var mul = 10*3;
// var div = 10/3;
// var mod = 10%3;
// var msg = "10/3 = 3 with a remainder of " + mod;

// console.log(sum,sub,mul,div,mod,msg)

var result = 10*((5+3)-4);
console.log(result)

var balances = [50.43,'srinu', 400.12, -300.50];
var studentNames = ["Timmy","Janessa","Arun"];
console.log(balances);

var naughtyList = [];
naughtyList.push(studentNames[0]);
naughtyList.push(studentNames[1]);

console.log(balances.indexOf('srinu'));
var index = naughtyList.indexOf("Timmy");

console.log(index);
console.log(naughtyList);
if(index>-1){
    naughtyList.splice(index,1);
}

console.log(naughtyList);


var myAccountBalance = 300;
var shoes = 799.23;
var coupon = 500;

if(shoes<=myAccountBalance){
    myAccountBalance-=shoes;
    console.log("We just bought some dope shoes!");
    console.log("Account Balance: "+ myAccountBalance);
}

else if((shoes-coupon)<=myAccountBalance){
    console.log("We just bought some dope shoes!");
    myAccountBalance-=shoes-coupon;
    console.log("Account Balance: "+ myAccountBalance);
}

else{
    console.log("You too broke fo shoes bra!");
}

// == equal to -> to check value is same 
// === equal to -> to check value and data type is same
// <= less than or equal to 
// >= greater than or equal to 

var val1 = 23;
var val2 = "23";

if(val1===val2){
    console.log("These are the same!");
}
else{
    console.log("One of these is not like the other...");
}


var students = ["Timmy","Tanessa","Arun"];
console.log(students);

var list = ["Timmy"];

list.push(students[0]);
console.log(list);
//To remove element from the array
var index = list.indexOf("Timmy");


if(index>-1){
    list.splice(index,2);
}
console.log(list);


var total = 10;
for(var i =0;i<total;i++){
    console.log(i);
}

var students = ["srinu","shashi","Babul","Saicharan"];

for(var i=0;i<students.length;i++){
    console.log(students[i]);
}



//Function and Methods

var message = "in global";
console.log("Message Data : "+message);

function a(){
    var message = "message in a";
    console.log("a : Message Data : "+ message);
    function b(){
        console.log("b: Message Data : "+message);
    }
    b();
    
}
a();

//Object literal

var facebook = {
    Name: "Facebook",
    ceo :{
        firstName: "mark",
        secondName: "Blue"
    },
    "Stock of Company ": 110

};

console.log(facebook);
console.log(facebook.Name);
console.log(facebook.ceo.firstName);
console.log(facebook.ceo.secondName);


//Functions are first-class data types
//Functions are objects

function multiply(x,y){
    return x*y;
}

console.log(multiply(3,5));
multiply.version = "v.10.0.1";
console.log(multiply.version);

//functions factory

function makeMultiplier(multiplier){
    var myFunc = function(x){
        return multiplier*x;
    }
    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(20));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(200));


//passing functions as argumentss

function doOperationOn(x,operation){
    return operation(x);
}

var result = doOperationOn(5,multiplyBy3);
console.log(result);

result = doOperationOn(5,doubleAll);
console.log(result);


//copy by Reference bs By value
//call by value : we do this on primitives


var a = 7;
var b = a;
console.log("a :"+a);
console.log("b : "+b);

b = 5;
console.log("After update b ");
console.log("a :"+a);
console.log("b : "+b);

//call by reference : we do this on objectives

var a = {x:7};
var b = a;

console.log("a :"+a.x);
console.log("b : "+b.x);

b.x = 5;
console.log("After update b.x ");
console.log("a :"+a.x);
console.log("b : "+b.x);

//Pass by reference vs by value

function changePrimitive(primValue){
    console.log("in changePrimitive...");
    console.log("before : ");
    console.log(primValue);

    primValue = 5;
    console.log("after : ");
    console.log(primValue);
}

var val = 7;
changePrimitive(val);
console.log("after  changePrimitve, orig value : ");
console.log(val);

//

function changePrimitive(primValue){
    console.log("call by Reference...");
    console.log("before : ");
    console.log(primValue);

    primValue.x = 5;
    console.log("after : ");
    console.log(primValue);
}

var val = {x: 7};
changePrimitive(val);
console.log("after  changePrimitve, orig value : ");
console.log(val);


//Function contructors

function test(){
    console.log(this);
    this.Myname="srinu";
}
test();
console.log(window.Myname);

function Circle(radius){
    this.radius = radius;
}

Circle.prototype.getArea = 
    function () {
        return Math.PI * Math.pow(this.radius,2);
    }

var myCircle = new Circle(10); //new Object(val);
console.log(myCircle.getArea());

var otherCircle = new Circle(20);
console.log(otherCircle.getArea());


//Object Literals and "this"

var literalCircle = {
    radius: 10,
    getArea: function() {
        var self = this;
        console.log(this);
        var increase = function () {
            self.radius = 20;
        };
        increase();
        console.log(self.radius);
        return Math.PI * Math.pow(this.radius,2); 
    }
};
console.log(literalCircle.getArea());


function Dog(name){
    this.name = name;
}

Dog.prototype.bark = function () {
    console.log(this.name + " likes barking! Bark!");
};

var max = new Dog("MAx","Buddy");
max.bark();



//Arrays

var array = new Array();

array[0] = "Srinu";
array[1] = 2;
array[3] = function (name){
    console.log("Hello "+ name);
};

array[4] = {course : "HTML, CSS & JS"};

console.log(array);
console.log(array[0]);
array[3](array[0]);
console.log(array[4].course);


var names = ["srinu", 'babul', 'saicharn'];
console.log(names);

for(var i=0;i<names.length;i++){
    console.log("Hello " + names[i]);
}

// names[100] = "Jim"; //97(undefined)
// for(var i=0;i<names.length;i++){
//     console.log("Hello " + names[i]);
// }

var names2 = ["srinu","vishnu","shashi"];

var myObj = {
    name: "Yakoov",
    course: "HTML/CSS/JS",
    platform: "Coursera"
};

for(var prop in myObj){
    console.log(prop +":" + myObj[prop]);
}

for(var n in names2){
    console.log("Hello " + names2[n]);
}

names2.greeting = "Hi!";

for(var n in names2){
console.log("!Hello "+names2[n]);
}

console.log("-------NameSpace-------");

// var name1 = "yaakov";
// function sayHello() {
//     console.log("Hello "+name1)
// }

(function (window) {
    var yaakovgreeter = {};
    yaakovgreeter.name = "Yaakov";
    var greeting = "Hello ";
    yaakovgreeter.sayHello = function () {
        console.log(greeting+yaakovgreeter.name);
    };
    window.yaakovgreeter = yaakovgreeter;
})(window);












// var length = 15;
// var width  =10;
// console.log(length*width);

// var l = 20;
// var b = 30;
// console.log(l*b);

// function area(length,width){
//     return length*width;
// }

// //var area = area(10,15);
// console.log(area(10,15));

// var rec = [];
// rec.push(area(10,15));
// rec.push(area(12,3));
// rec.push(area(12,7));
// rec.push(area(110,1));
// console.log(rec);

// var bal = 500;

// function maketrans(pos){
//     if(pos<=bal){
//         bal-=pos;
//         console.log("purchase Successful");
//     }else{
//         console.log("INsufficient Funds");
//     }
// }

// console.log(bal);
// maketrans(79.00);
// console.log(bal);
// maketrans(9.00);
// console.log(bal);
// maketrans(8.00);
// console.log(bal);
// maketrans(500.00);

// var trans = function(pos){
//     if(pos<=bal){
//         bal-=pos;
//         console.log("purchase Successful");
//     }else{
//         console.log("INsufficient Funds");
//     }
// };

// var customerName = function(first,last){
//     console.log("First Name : "+ first + " Last Name : "+ last);
// }

// var applyforcreditCard = function(credictscore,soul){
//     //call some functions to process aplication
// }

// var bankOperations = [];
// bankOperations.push(trans);
// bankOperations.push(customerName);
// bankOperations.push(applyforcreditCard);
// console.log(bankOperations);


//javascript Objects

var students = [];

function Student(first,last,age){
    this.firstName = first;
    this.lastName  = last;
    this.age = age;
    this.greeting = function(){
        return "Hi, I'm "+ this.firstName+ " and I'm "+ this.age+" years old."; 
    };
}

// var s = new Student("Srinivas","Dharpally",19);
// console.log(s);
// console.log(s.greeting);

students.push(new Student("Srinivas","Dharpally",19));
students.push(new Student("Bablul","nalluri",19));
students.push(new Student("saicharan","gangoj",19))

var student = students[0];

// for (var key in student){
//     console.log(student[key]);
// }


// var student = {
//     firstName: "Srinivas",
//     lastName : "Dharpally",
//     age : 19,
//     greeting: function(){
//         return "Hi, I'm "+ this.firstName+ " and I'm "+ this.age+" years old."; 
//     }
// };

// console.log(student.greeting()); 

//creates a new emtpy object;

// var student1 = new Object();

// student1.firstName = "shashi";
// student1.lastName = "Bandi";
// student1.age = 19;


// var student2 = {};
// student2.firstName = "Babul Parthiev";
// student2.lastName = "patham";
// student2.age = 20;



// var students = [];

// students.push(student);
// students.push(student1);
// students.push(student2);

for(var i=0;i<students.length;i++){
    // console.log(studnets[i]);
    var student = students[i];
    console.log(student.greeting());
}



// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student["firstName"]);
// console.log(student["lastName"]);



//Bind

this.car = "HOnda Civic w/ Ugly Spoiler";

var marksGarage={
    car: "Aston Martin",
    getCar: function(){
        return this.car;
    }
};

console.log(marksGarage.getCar());

var storeGetCarForLater = marksGarage.getCar;

console.log(storeGetCarForLater());

var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);

console.log(theRealGetCarFunction());



//Data types

var x=5;

if(x==undefined){
    console.log("variable is undefined");
}
else{
    console.log("variable is defined");
}

//string concatenation

var string = "Hello";
string += " World";
console.log(string+"!");

