
// What is an enum in TypeScript?
// An enum is a predetermined profile/object with variables that stay constant.

// ➤ Example: Create an enum called Weather with values for Sunny, Rainy, and Cloudy.
enum Weather {
    SUNNY = "The sun is up and sky is clear",
    RAINY = "The sun is covered and rain is falling",
    CLOUDY = "The sun is slightly covered but no rain"
}



// What is an interface in TypeScript?
// An interface defines contracts for the shape of objects. It specifies the properties and methods that an object must have, without providing any implementation details like a schema. Uses similarities among unrelated classes without forcing a class relationship
// ➤ Example: Create an interface called Car with properties make, model, and year.

interface Car {
    make: string,
    model : string,
    year : number
}

// What is a function in TypeScript?
//  A function in TypeScript is a block of code that performs a specific task.

// ➤ Example: 
const greet = (name : string): void => {
    console.log('Hello! Nice to meet you ' +  name );
}

// 🛠️ PART 2: Code Application 
// Instructions: Complete the following coding tasks. Each one asks you to apply your knowledge of TypeScript features in a short, functional script.

// Enums:
// Create an enum called UserRole with the following values: Admin, Editor, and Viewer.
enum UserRole {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer'
}

let currentRole: UserRole = UserRole.Editor;
console.log(currentRole)

// Aliases:
//define: An Alias is a custom type of union so that instead of always writing "string | number" you can write something like "both"

// Interfaces:
// Define an interface called Student that includes:
interface Student {
    name: string;
    gradeLevel: number;
    isEnrolled: boolean;
}

let patsy: Student = {
    name: "Patsy",
    gradeLevel: 9,
    isEnrolled: true,
};

console.log(patsy)

// Functions:
// Write a function named calculateTotal that:
function calculateTotal(price: number, taxRate: number): number {
    return price + (price * taxRate);
}

console.log(calculateTotal(100, 0.08))

// ➤ Example input: calculateTotal(100, 0.08) should return 108.
