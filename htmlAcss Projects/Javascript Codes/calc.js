var numField1 = document.getElementById("numField1");
//To check is js file connected to html or not;

//numField1.value = "srinu";

var numField2 = document.getElementById("numField2");

//numField2.value="Dharpally";

var resultField = document.getElementById("resultField");

//result.innerText = "true";

//connecting to form

var form = document.getElementById("xIsWhatPercentOfY");

form.addEventListener('submit',function(event){

    if(!numField1.value || !numField2.value){
        alert("Please Enter the Required Fields");
    }else{
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        //console.log(x);
        //console.log(y); //These two are not working, know the reason
        var result = x/y;
        var percent = result*100;

        resultField.innerText = "Answer : "+percent+"%";
        event.preventDefault();
    }
    
});

// document.getElementById("xIsWhatPercentOfY").addEventListener('submit',function(){

// });
