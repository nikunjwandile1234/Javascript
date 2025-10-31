class user{
    constructor(username)
    {
        this.username=username;
    }


    logme()
    {
        console.group(`the usrename is ${this.username}`)
    }

     static createid(){
        return `123`;
    }
}

const n= new user("nikunj");
n.logme();
// n.createid();

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

const t= new teacher("nikunj","nikunjwandile123@gmail.com","RXlion@123")
t.addcourse();
// t.createid()

// static only in one form 