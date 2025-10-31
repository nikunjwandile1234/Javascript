
// class user{

//     constructor(username,email,password)
//     {
//         this.username=username;
//         this.email=email;
//         this.password=password;

//     }

//     encryptpassword()
//     {
//          return `${this.password}abcmg`;
//     }

//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai= new user("NIKUNJ","nikunjwandile123@gmail.com","RXlion@123");

// console.log(chai.encryptpassword());
// console.log(chai.changeusername());


// without using the class the scene is 

function user(username,email,password)
{
    this.username=username;
    this.email=email;
    this.password=password;
}




user.prototype.encryptpassword=function()
{
    return `${this.password}abcf`;
}

user.prototype.changeusername=function()
{
    return `${this.username.toUpperCase()}`;
}

const tea= new user("nikunj","wandilenikunj@gmail.com","RXlion@123")
 console.log(tea.encryptpassword());
console.log(tea.changeusername());