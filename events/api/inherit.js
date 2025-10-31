class user{
    constructor(username)
    {
        this.username=username;
    }


    logme()
    {
        console.group(`the usrename is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username,email,password)
    {
        super(username);
        this.password=password;
        this.email=email;
    }

    addcourse()
    {
        console.log(`the user added course${this.username}`);

    }


    
}

const one =new teacher ("nikunj","nikunjwandile123@gmail.com","RXlion@123")
one.addcourse();
one.logme();

const two= new user("nikunj");
two.logme();
