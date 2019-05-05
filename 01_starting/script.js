"use strict";
function Greeter(greeting) {
    this.greeting = greeting;
}
Greeter.prototype.greet = function () {
    return "Hello, " + this.greeting;
};
var greater = new Greeter("world");
var button = document.createElement('button');
button.textContent = "Say hello";
button.onclick = function () {
    alert(greater.greet());
};
document.body.appendChild(button);
