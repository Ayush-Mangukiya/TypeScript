// Union : 
// A union type is a type formed from two or more other types, representing values that 
// may be any one of those types. We refer to each of these types as the union’s members.

let score: number | string = 38

score = 46

score = "55"

type User = {
    name: string,
    id: number,
}

type Admin = {
    username: string,
    id: number,
}

let ayush: User | Admin = {name: "Ayush", id: 24}

ayush = {username: "AyushMangukiya", id: 157}

// REMEMBER : while comparing put type inside quotes

// Union Narrowing:
// Within our if check, TypeScript sees typeof id === "string" and understands that 
// as a special form of code called a type guard. TypeScript follows possible paths of 
// execution that our programs can take to analyze the most specific possible type of a 
// value at a given position. It looks at these special checks (called type guards) and 
// assignments, and the process of refining types to more specific types than declared is 
// called narrowing.

function getDbId(id: number | string) {
    // making some API calls
    console.log(`DB id is: ${id}`);
    if(typeof id === "string") {
        id.toLowerCase();
    }
}

getDbId(3);
getDbId("3");

// Array
const data1: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];

// Either array of number or string, mixture is not allowed
const data3: number[] | string[] = [1, 2, 3];

// Mixture Allowed
const data4: (number | string | boolean)[] = ["1", "2", 3, true];

let pi: 3.14 = 3.14;
// pi = 3.1428 -> not allowed

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle";
// seatAllotment = "crew";