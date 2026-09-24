// classes

class LoginPage{

    //Properties
    a = 20

    // Methods
    login = () => {
        console.log("Login called")
    }

    sayHello = (nameValue) => {
        console.log(`Hello, ${nameValue} , from class`)
    }
    

    logout = () => {
        console.log("Logout called")
    }
}

// create object of class
// Default constructor
const loginPageObject = new LoginPage()   

loginPageObject.login()
loginPageObject.sayHello("Srinivas")
loginPageObject.logout()

