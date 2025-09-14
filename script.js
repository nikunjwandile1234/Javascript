console.log("hello nikunj");
var username="nikunj12345";
const password="12345";

//alert("welcome to javascript ");

//prompt("Enter your Name Using javascript");


console.log(username);
console.warn("dont give the another password other than saved");
console.log("Enter the password");
console.log(password);
console.error("wrong password");


var a=12.2;
var b=a;

const c=10;
var d=c;


var e = NaN;//not an number;


//window bucket from browser

var g=10;
if(g=>10)
    console.log("its 10");
else
    console.log("its smaller than 10");

    for(var i=0;i<5;i++)
    {
        console.log("its javascript");
    }

    var h=5;
   
    do{
        console.log("its father");
    }

    while(h<5)
// function 
 

    function abcd()
    {
        if(h=>5)
            console.log("its five");
        else
        {
            console.log("its greater than 5");
        }
    }

    abcd();


    var abgh =function()
    {
        if(a == 12.2)
        console.log("its 12.2");
        else
        console.log("its not ");
        
    }

    abgh();


    //es6 function 

    var m =()=>
    {
        console.log("its fat arrow ");
    }

    m();
//fat arroe function 

    var gh=(ab)=>
    {
        console.log("its paramter"+" "+ab);
        return ab;
    }
  

    gh(12);


    // array


    var user =["nikunj ","mans","digvijay","krishna"];
    console.log(user[0]);


   
    console.log(user);

var obj1={

    name:"nikunj",
    class:"ty.btech",
    year:"3 rd year",
    politics:"no politics",

};

console.log(obj1.name);
console.log(obj1.class);
console.log(obj1.year);
console.log(obj1.politics);


var obj2= new Object();

obj2 ={
    name:"digvijay",
    class:"ty.btech",
    year:" 3 rd year",
};


console.log("  ");

console.log(obj2.name);
console.log(obj2.class);
console.log(obj1.year);

console.log(" ");

const {name:n}=obj2;//destructure of object for resuing the name of object properly 
console.log(n);
// with parameter and return type ;
function userloggedin(ussssername)
{
    if(!ussssername)
    {
        console.log("Enter valid user name")
        return 
    }
     return  `${ussssername} just logged in `
}

 const result=userloggedin("nikunj");
 console.log("the user is",result);
 //passing object as parameteer


 const loggedin=
 {
    username:"nikunj",
    age:21,
    designation:"B.tech"

 }


 function logvalues(anyobject)
 {
      console.log(`username is ${anyobject.username} and the age is ${anyobject.age}`)

 }

// function orobject(on) {
       // Example usage of the 'on' object
       //console.log(`usecase is ${on.usecase} and age is ${on.age}`);
// }

// orobject(obj2)

 logvalues(loggedin)

//passing the array in function 
const newarray=[100,200,300,400];

function returnthirdvalues(anyarray)
{
    return anyarray[2]
}

console.log(returnthirdvalues(newarray));
// scope and hoisting 

let num=10;
console.log(addonemore(num))
function addonemore(num)
{
    return num+1
}


const addtwomore =function(num)
{
    return num+2;
}

console.log(addtwomore(num))
//print the current date 
let datetoday = new Date();
console.log(datetoday.toLocaleString())
// this keyword

console.log(this)
const vlogger={
    user:"nikunj",
    age:21,
    desination:b.tech,
    welcomemsg:function()
    {
        console.log(`the user is ${this.user} the age is ${this.age}`)
    }
}

vlogger.welcomemsg()
vlogger.user="digvijay"
vlogger.welcomemsg()


function am()
{
    let username="pranav"
    console.log(this.username)
}
am()

const at=function()
{
    let username="kanacha"
    console.log(this.kancha)
}

at()

//fat arrow function 

 const dm =()=>{

    let username="sahil"
    console.log(this.username)


 }
 dm()

 //implicit function
 function adddone(num1,num2)
{
    return num1+num2
}

console.log(adddone(7,7))
const addddone=(num1,num2)=>(num1+num2)
console.log(addddone(7,7))
const printobj=()=>(console.log({username:"hitesh"}))
printobj();

//iife immediate invoked function expressuion
// named iife
( function call()
{
    console.log("DB connected")
}) ();
// unnamed iife
( (namelogin)=>{
    console.log(`DB Connected ${namelogin}`)
})("pranav")

//loops  
for(let index=0;index<10;index++)
{
    const element=index;
    if(index===5)
    {
        console.log("5 is the best number");
    }
    console.log(element);
}

for(let i=0;i<=10;i++)
{
    console.log(`the outer loop ${i}`)
    for(let j=0;j<=10;j++)
    {
    // console.log(`the inner loop ${j}  the outer loop ${i}`)
    //console.log(i+'*'+j+'='+i*j)
    }
}

let thedate=Date();
console.log(thedate.toLocaleString());

let cross=["dighu",'nikunj','pranav']
for(let i=0;i<cross.length;i++)
{
    const elem=cross[i];
    //console.log(elem);
}

// for(let i=1;i<20;i++)
// {
//     console.log(`the elem is ${i}`);
// //     if(i==5)
// //     {
// //         break;
// //     }
// //     else{
// //         continue;
// //     }
// // }

// while loop 
let ni=0;

while (ni<=10)
{
   // console.log(`the index is${ni}`)
    ni=ni+2;
}

// let amr=0;
// while(amr<cross.length)
// {
//     const elem=cross[amr];
//     console.log(elem);
//     amr++;
// }

let score=11;
do{
   console.log(`the score is${score}`)
}
while(score<=10)
    // for of loop
const greetings="hello world";
for (const greet of greetings) {
    console.log(`the elem is ${greet}`);
    
    
}

// unique value 
const map =new Map();
map.set("in","india")
map.set("usa","usa")
console.log(map);

for (const [key,value] of map) { // array destructure to print 
    console.log(key,":-",value); 
    
    
}
// object is not iteratale ,maps are iteratale ,object are not iteratable on for of   

// for in loops
const obj={
    cpp: "c++",
    js: "javascript",
    java:"java",
    swift:"swift for apple "
}
// for in loops are for objects maps are not iteratable on object 

for (const key in obj) {
      console.log(`${key} for language shortcut ${obj[key]}`) 
        
    }

    const arr3=["java","swift","c++","ruby"];
//  for (const [key] in arr3) {
//         console.log(`${arr3[key]}`);
        
//     }
//     // for in loops doesnt works on the maps iteration 

// arr3.forEach(function(value){
//     console.log(value);
// })


function print(value,index,arr){
 console.log(value,index,arr);
 
}
arr3.forEach(print)
const coding =[
    {
        languagename:"java",
        languagefilename:"java"

    },
     {
        languagename:"javascript",
        languagefilename:"js"

    },
     {
        languagename:"c++",
        languagefilename:"cpp"

    }
]


// coding.forEach((item)=>{
//     console.log(`${item.languagename}the filename is${item.languagefilename}`);
    
// })
// use of filter - directly return teh value 

const arr4=[1,2,3,4,5,6,7,8]

// // const value=arr4.forEach(function (item){
// //      console.log(item)
// //      return item ;
// })

// console.log(value);
// not returrning the values
// filter for making the constions on array

// const newnums=arr4.filter(function(item) {
//    return num>4
// })

// console.log(newnums);
// map condition 
// const val1=arr4.map((num)=> num+10)
// console.log(val1);

// map chaining with filter  left - to right passing with filter(true and false) only filtered true vale passes

const val1= arr4
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=> num>=40)

console.log(val1)


//reduce method - have acculumlator ancurd value with comma with initial for one time then add sum in next accumulator
// const arr5=[1,2,3]
// const total=arr5.reduce(function(acc,cur){
//     console.log(`the acc is${acc} the curr is${cur}`)
//     return acc+cur;
// },8 ) // last one is intiail value for acuumulator

// console.log(total);

const shoppingcart=[
    {
        itemname:"webdevcourse",
        price:15000
    },
     {
        itemname:"data science",
        price:12999
    },
     {
        itemname:"ml",
        price:1300
     },
     {
        itemname:"mobile dev",
        price:1000
    },

]


const totalcart=shoppingcart.reduce((acc,item)=> acc+item.price,0)
console.log(`the value of ${totalcart}`);


