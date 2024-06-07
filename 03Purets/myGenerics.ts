const score: Array<number> = []
const heroes: Array<string> = []

function identityOne(val: boolean | number) : boolean | number {
    return val
}

function identityTwo(val: any) : any {
    return val
} // Not good idea
 
function identityThree<Type>(val: Type) : Type {
    return val
}

identityThree(3)
identityThree("3")
identityThree(true)

function identityFour<T>(val: T) : T {
    return val;
}

interface Bottle {
    brand: string
    type: number
}

// REMEMBER : we need to pass key value while passing object and while passing instance only pass values.
identityFour<Bottle>({brand: "Puma", type: 1})

function getSearchProducts<T>(products: T[] /* Array<T> */) : T {
    const myIndex = 3
    return products[myIndex]
}

// genetic arrow function
const getMoreSearchProducts = <T>(products: T[]) : T => {
    const myIndex = 4
    return products[myIndex]
}

function anotherFucntion<T, U extends number>(valOne: T, valTwo: U): object {
    return {valOne, valTwo}
}

// anotherFucntion(3, "4") -> 2nd parameter should be number

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherDbFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {valOne, valTwo}
}

anotherDbFunction(3, {connection: "", username: "", password: ""})

// genetic class type

interface Quiz{
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}