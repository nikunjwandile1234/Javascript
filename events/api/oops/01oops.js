const user={
    username:"nikunj",
    Email:"nikunjwandile123@gmail.com",
    professsion:"enginner(b.tech)",

    getusername:function(){

        console.log(this.username);

    }
}


console.log(user.getusername());

// constructor used to instialze objects without return type 
// every object of constructor is made using new and it created new instarces example user 1 and user 2 of user1
function user1(usrename,userid,isloggedin)
{
    this.username=usrename
    this.userid=userid
    this.isloggedin=isloggedin
}


const userone= new user1("nikunj",51,true);
const usertwo= new user1("sahil",61,false);

console.log(userone);
console.log(usertwo);

// prototype
// prototypal inheritance 
// every thing is  anvobject in javascript
/// every thing is bounded by the javascript prtotype which goes up to up to find 
// find prototype in an object 

// the parent of all things in javascript is object and .operators is in use for all


function pp(num){

  return num*5
}

pp.power=2;
console.log(pp(5));
console.log(pp.power);
console.log(pp.prototype);


// this is pototypal inheritance in javascript for an object 
// this keyword sets a current context in js 


const user4= function(username,score){
    this.username=username;
    this.score=score;
}


user4.prototype.incermemt=function(){
    this.score++

}

user4.prototype.printme=function()
{
    console.log(`the score is ${this.score}`);

}


const chai= new user4("chai",25);
const tea= new user4("tea",250);


chai.incermemt();
tea.incermemt();

chai.printme();
tea.printme();

