// class User {
//     public email: string
//     private name: string  -> can not be accessed outside of class so we write getter and setter for it
//     readonly city: string = "Surat"
//     constructor(email: string, name:string) {
//         this.email = email
//         this.name = name
//     }
// }

// const ayush = new User("ayush@adi.com", "ayush");

// we #variable in js to make it privater

class User {

    private _courseCount = 1
    protected _courseCnt = 1 // protected members are accessible to all child class which
    // inherits (extends) parent class

    readonly city : "Surat"

    constructor(
        public email: string,
        public name: string,
        private userId: string
    ) {

    }

    // If i dont write any return -> A 'get' accessor must return a value.
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount;
    }

    // A 'set' accessor cannot have a return type annotation.
    set courseCount(courseNum: number) {
        if(courseNum <- 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }

    private deleteToken() {
        console.log("Token Deletdd!");
    }
}
const ayush = new User("ayush@adi.com", "ayush", "157");

// ayush.deleteToken(); ->Property 'deleteToken' is private and only accessible within class 'User'.

class subUser extends User {
    // can not acquire property mentioned as private
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCnt = 4
    }
}