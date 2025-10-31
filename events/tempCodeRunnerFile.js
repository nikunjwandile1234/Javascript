const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);


const starbucks={
    coffee:"menu",
    isavailable:"yes",
    price:250
}

console.log(starbucks)

console.log(Object.getOwnPropertyDescriptor(starbucks))