let greetings: string = "Hello Ayush";

console.log(greetings);

// number : JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number
// TypeScript is smart enough to infer type

let userid: number = 24

let mtechYear = 2023.8
mtechYear.toFixed()

// boolean

let isLoggedIn: boolean = false

// Variable 'hero' implicitly has an 'any' type, but a better type may be inferred from usage -> until assignment get done.

let hero;

function getHero() {
    return "thor"
}

// any : TypeScript also has a special type, any, that you can use whenever you don’t want a 
// particular value to cause typechecking errors.

// noImplicitAny : 
// When you don’t specify a type, and TypeScript can’t infer it from context, the compiler 
// will typically default to any.

// You usually want to avoid this, though, because any isn’t type-checked. Use the compiler 
// flag noImplicitAny to flag any implicit any as an error.

hero = getHero()

let heroDC: string;

function getHeroDC() {
    return "Batman";
}

heroDC = getHeroDC()