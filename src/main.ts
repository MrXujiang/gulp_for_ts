import { sayHello } from "./greet"


function hello(name:string) {
    console.log(`hello from ${name}`)
}

hello('ts')
console.log(sayHello('xujiang'));

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greet", "TypeScript watch..........");
