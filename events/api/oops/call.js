function setusername(username){
       this.username=username;
       console.log("called");
}

  function createuser(username,email,password)// the call function  makes the function call in current function using this as parameter in the current contex
  {
    setusername.call(this,username);
    this.password=password;
    this.email=email;
  }

  const chai= new createuser("nikunj","nikunjwandle123@gmail.com","RXlion@123");
  console.log(chai.username);