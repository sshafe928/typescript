var age :number = 17 ;
var title : string = "Sabrina" ; 
var alive : boolean = true ;

let greeting : string = "Welcome to Jurassic Park"

function add(n1: number, n2: number){
    return n1 + n2
}

console.log(add(15234, 3454))

const addArrow = (n1 : number, n2:number) : number => n1 + n2

const printResult = (num : number): void => {
    console.log('Result: ' +  num );
}

let answer : number | string
answer = 456

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
    readonly empCode: number
    empName: string
    constructor(empCode: number, empName : string){
        this.empCode = empCode
        this.empName = empName
    }
}

let emp = new Employee(10, 'john')
// emp.empCode = 20 //compiler error
emp.empName = 'Bill'


class Circle {
    static pi: number = 3.14
    static findArea = (rad:number) => Circle.pi * rad ** 2
}

Circle.pi //3.14
Circle.findArea(10) //314