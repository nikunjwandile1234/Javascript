const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);


const starbucks={
    coffee:"menu",
    isavailable:"yes",
    price:250,
    ordercoffee: function(){
        console.log("coffee is not ready ")
    }
}

console.log(starbucks)

console.log(Object.getOwnPropertyDescriptor(starbucks,"coffee"))
Object.defineProperty(starbucks,"coffee",{
    writable:true,
    enumerable:true,
    value:"check the menu now"
})

console.log(Object.getOwnPropertyDescriptor(starbucks,"coffee"))

for (const  [key,value] of Object.entries(starbucks)) {
    if(typeof value!=='function')
    {
       console.log(`${key}:${value}`)
    }
    
}

