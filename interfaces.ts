interface Person {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

function contact(person: Person) {
    return "Call " + person.firstName + " " + person.lastName + " on "+person.phoneNumber;
}

let user = { firstName: "Jane", lastName: "User", phoneNumber: "123456788" };

console.log(contact(user))