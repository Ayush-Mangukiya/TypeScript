function addTwo(num) {
    return num + 2;
    // return "Hello"; -> Type 'string' is not assignable to type 'number'.
}
addTwo(2);
//addTwo("5") ->Argument of type 'string' is not assignable to parameter of type 'number'.
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("ayush");
function signUpUser(name, email, password, isPaid) {
}
signUpUser("ayush", "ayush18@analog.com", "ayush18", true);
// Providing Default Value
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("ayush", "ayush18@analog.com");
// function getValue(myVal: number): boolean {
//     if(myVal > 5) {
//         return true;
//     }
//     return "200 Ok";
// }
// When there's no return {string} statement
// Error : A function whose declared type is neither 'undefined', 'void', nor 'any' must 
// return a value.
var getHello = function (s) {
    return "";
};
var heroes = ['Batman', 'Spiderman', 'Thor', 'Ironman'];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
// never : 
// The never type represents values which are never observed. In a return type, this means
// that the function throws an exception or terminates execution of the program.
// never also appears when TypeScript determines there’s nothing left in a union.
function handleError(errmsg) {
    throw new Error(errmsg);
}
