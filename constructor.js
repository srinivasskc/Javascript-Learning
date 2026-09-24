class LoginPage{
    // Adding constructor to initialize or set up initial values
    constructor(company, address){
        this.nameValue = "Srinivas"
        this.age = 36
        this.company = company
        this.address = address
    }

    login = () => {
        console.log("Login called")
        console.log(`My company is ${this.company}`)
    }
}

const loginPageObject = new LoginPage()
// Calling Class Method
loginPageObject.login()

// Calling constructor values
console.log(loginPageObject.nameValue)
console.log(loginPageObject.age)

// Parameterized Constructor
const loginPageObject2 = new LoginPage("Moolya", "HSR")
console.log(loginPageObject2.company)
console.log(loginPageObject2.address)

// Calling the object having parameterized constructor.
loginPageObject2.login()


