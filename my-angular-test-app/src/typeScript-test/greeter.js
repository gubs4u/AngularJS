var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
// let userObj = {firstName: "Gubendran", lastName: "Lakshmanan"};
// document.body.textContent=greeter(userObj);
var user = new Student("Gubendran", " Chennai ", "Laksh");
document.body.textContent = greeter(user);
