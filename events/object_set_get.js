const user={
    _email:"nikunjwandile123@gmail.com",
    _password:"RXlion@123",


    get email(){
        return this._email.toUpperCase();
    },
    

    set email(value){
        this._email=value;
    },

    get password(){
         return this._password.toUpperCase();
    },

    set password(value )
    {
         this._password=value;
    }
}


const user1=Object.create(user);
console.log(user.password);
console.log(user.email);