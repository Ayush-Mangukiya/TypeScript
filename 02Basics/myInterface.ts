interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    startTrail: () => string
    startTrail2(): string 
    getCoupon(couponname: string): number  
}

const ayush: User = {dbId: 24, email: "am@adicom", userId: 157, githubToken: "github",
                      startTrail: () => { 
                        return "Trail Started"; 
                      }, 
                      startTrail2: () => { 
                        return "Trail2 started"
                      },
                      getCoupon: (name: "ayush18") => {
                        return 10;
                      }
                      
                    }

// Differences Between Type Aliases and Interfaces :
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. 
// Almost all features of an interface are available in type, the key distinction is that a type 
// cannot be re-opened to add new properties vs an interface which is always extendable.

// referred as reopening of interface
interface User {
    githubToken: string
}

// extending an interface
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const ayushh: Admin = {dbId: 24, email: "am@adicom", userId: 157, role: "admin", githubToken: "github",
    startTrail: () => { 
        return "Trail Started"; 
    }, 
    startTrail2: () => { 
        return "Trail2 started"
    },
    getCoupon: (name: "ayush18") => {
        return 10;
    }
    
    };                    

// Type
type Animal = {
    name: string;
  }
  
type Bear = Animal & { 
honey: boolean;
}
  
type window = {
    title: string;
  }
  
// type window = {     -> Not Possible
// ts: TypeScriptAPI;
// }
  

