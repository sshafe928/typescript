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