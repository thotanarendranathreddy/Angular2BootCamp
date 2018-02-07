let greeting = "Welcome to Angular js 2.0";
greet(greeting);

function greet(greeting : string){
    var h1 = document.getElementById('greeting');
    h1.textContent = greeting;
}