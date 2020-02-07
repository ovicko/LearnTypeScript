/*
Functions in Typescript
*/
function greet(person) {
    return "Hello, " + person;
}

let user = "Jane User";

console.log(greet(user));

/*
Type annotations
*/
function speak(word:string) {
    return word;
}

let text = "I'm learning TypeScript";

console.log(speak(text));