"use strict";
var age = 17;
var title = "Sabrina";
var alive = true;
let greeting = "Welcome to Jurassic Park";
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(15234, 3454));
const addArrow = (n1, n2) => n1 + n2;
const printResult = (num) => {
    console.log('Result: ' + num);
};
let answer;
answer = 456;
// class Employee {
//     public empCode: number = 12
//     empName: string = "bob" // public is default
// }
// let emp = new Employee();
// emp.empCode = 123
// emp.empName = 'swati'
// class Employee {
//     public empName: string = "bob";
//     protected empCode: number = 123;
// }
// class SalesEmployee extends Employee{
//     private department: string= "Sales";
//     public checkCode = () => console.log(this.empCode);
// }
// let empObj = new SalesEmployee()
// empObj.empName = "John Smith"
// empObj.checkCode()
//empObj.empCode
class Employee {
    constructor(empCode, empName) {
        this.empCode = empCode;
        this.empName = empName;
    }
}
let emp = new Employee(10, 'john');
// emp.empCode = 20 //compiler error
emp.empName = 'Bill';
class Circle {
}
Circle.pi = 3.14;
Circle.findArea = (rad) => Circle.pi * rad ** 2;
Circle.pi; //3.14
Circle.findArea(10); //314
