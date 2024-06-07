const user = {
    name: "ayush",
    email: "ayush18@analog.com",
    isActive: true,
}

function createUser({name: string, isPaid: boolean}) {

}

createUser({name: "ayush", isPaid: false});

let newUser = {name: "ayush", isPaid: false, email: "ayush18@analog.com"};
createUser(newUser);

function createCourse(): {name: string, price: number}{
    return {name: "reactjs", price: 399};
}

// Type alias:
// A type alias is exactly that - a name for any type. 
type user = {
    name: string,
    email: string,
    isActive: boolean,
}

function createUser1(User: user): user {
    return {name: "", email: "", isActive: true};
}

createUser1({name: "", email: "", isActive: true});

type Person = {
    // let say you're using mongodb to save this person and want that no one should access
    // _id then we can use readonly
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number, // optional
}

let myUser: Person = {
    _id: "157",
    name: "A",
    email: "am@ad.com",
    isActive: true,
}

myUser.email = "am@adi.com";
// myUser._id = "158"; -> Cannot assign to '_id' because it is a read-only property.

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}