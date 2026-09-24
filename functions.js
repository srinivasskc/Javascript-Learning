// Functions

function sayHello() {
    console.log("Hello")
}

sayHello()


// Arrow Functions

const sayHelloArrow =   () =>  {
    console.log("Hello Arrow Function")
}
sayHelloArrow()


// Function with Parameters

const sayHi = (nameValue) => {
    console.log(`Hi ${nameValue} `)
}
sayHi("Function with Single Parameter")

// Function with Multiple Parameters

const sayHiMultiple = (nameValue, ageValue) => {
    console.log(`Hi ${nameValue} and you are of age ${ageValue}`)
}
sayHiMultiple("Srinivas - Multiple Parameters", 36)

// Function with Return Value

const getAge = () => {
    const age = 20
    return age
}
ageValue = getAge()
console.log(ageValue)


// Function with Multiple Parameters with Return Value

const sayHiMultipleReturn = (nameValue, ageValue) => {
    console.log(`Hi ${nameValue}`)
    return ageValue
}
ageValue = sayHiMultipleReturn("Srinivas", 36)
console.log("AgeValue: ", ageValue)
