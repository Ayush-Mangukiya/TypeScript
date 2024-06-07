function detectType(val: number | string) {
    if(typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3
}

function proivdeId(id: string | null) {
    if(!id) {
        console.log("Please Provide id");
        return
    }
    id.toLowerCase()
}

// narrowing - type guard

function printAll(strs: string | string[] | null) {
    if(strs) {
        if(typeof strs === "object") {
            for(const s of strs) {
                console.log(s);
            }
        } else if(typeof strs === "string") {
            console.log(strs);
        }
    }
}

function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toUTCString())
    } else {
        console.log(x.toUpperCase())
    }
}

type Fish = {
    swim: () => void
}

type Bird = {
    fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

// when we do not mention any return type in isFish(), in getFood() we can see that (parameter) pet: Fish | Bird
// at both if and else block so now we use type predicates to definite things.

function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet
        return "bird food"
    }

}

// Discriminated Union :
// When every type in a union contains a common property with literal types, TypeScript considers 
// that to be a discriminated union, and can narrow out the members of the union.

// In this case, kind was that common property (which is what’s considered a discriminant 
// property of Shape). Checking whether the kind property was "circle" got rid of every 
// type in Shape that didn’t have a kind property with the type "circle". That narrowed 
// shape down to the type Circle.

interface Circle {
    kind: "circle"
    radius: number
}

interface Square {
    kind: "sqaure"
    side: number
}

interface Rectangle {
    kind: "rectangle"
    width: number
    length: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape) {
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}

// The never type
// When narrowing, you can reduce the options of a union to a point where you have removed all 
// possibilities and have nothing left. In those cases, TypeScript will use a never type to 
// represent a state which shouldn’t exist.

// Exhaustiveness checking
// The never type is assignable to every type; however, no type is assignable to never (except never itself). 
// This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement.

// For example, adding a default to our getArea function which tries to assign the shape to never will
// not raise an error when every possible case has been handled.

function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2

        case "sqaure":
            return shape.side * shape.side
        
        case "rectangle":
            return shape.length * shape.width
        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }

}