function Greeter(greeting: string) {
    this.greeting = greeting;
}

Greeter.prototype.greet = function() {
    return "Hello, " + this.greeting;
}

let greater = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say hello";
button.onclick = function() {
    alert(greater.greet());
}

document.body.appendChild(button);