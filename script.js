setTimeout(myFunction, 3000);

function myFunction(){
    document.getElementById("demo").innerHTML = "I love you";
}

setTimeout(helloFunction, 5000);
function helloFunction(){
    document.getElementById("demo").innerHTML = "I hate you";
}