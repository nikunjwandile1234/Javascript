const usrename="nikunj     ";
/// onject true length prototype 

// inject in object to prototype


const myheroes=["superman","batman"];

const trueleaders={
    name:"captain america",
    position:"leadersquadron",

    heropower:function(){
        console.log(`the leader of the heroes${this.name}`);
    }
}

Object.prototype.Nikunj=function(){
    console.log("captain america is one leader");
}

Array.prototype.Nkunj=function(){
    console.log("prototype for all heroes array");
}

myheroes.Nikunj();
myheroes.Nkunj();

// inheritance  with normal and set prototype

const ceo={
    name:"NIKUNJ"

}

const employee={
    designation:"ceo",
    expreience:"15 yrs",
    __proto__:ceo
}

const person={
    age:37,
    status:"married",
    __proto__:employee
}
// used prototype inheritance 
Object.setPrototypeOf(employee,ceo);

// task for true length 

// string protype 
String.prototype.truelength=function(){
    console.log(`${this}`)
    console.log(`the true length of the the string is ${this.trim().length}`);
}

usrename.truelength();