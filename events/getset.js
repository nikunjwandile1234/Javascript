class user {
    constructor(email,password)
    {
        this.email=email;
        this.password=password;

    }


    get email()
    {
         return this._email ? this._email.toUpperCase() : undefined;
    }

    set email(value)
    {
        this._email = value;
    }

    get password()
    {
         return this._password ? this._password.toUpperCase() : undefined;
    }

    set password(value)
    {
        this._password=value;
    }
}

const user1= new user("nikunj@1235gmail","RXlion@123")
console.log(user1.email)
console.log(user1.password); 