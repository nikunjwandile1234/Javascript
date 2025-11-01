function user(email,password)
{
    this.email =email;
    this.password=password;

}

// get set for speacufic properties
Object.defineProperty(this,"email",{
    set:function(value){
        this.email=value;
    },
   get:function(){
    return this.email.toUpperCase();
   }

})

Object.defineProperty(this,"password",{
    set:function(value){
         this.password=value;
    },

    get :function()
    {
         return  this.password.toUpperCase();  
    }
})


const user1= new user("nikunjwandile123@gmail.coom","RXlion@123")
console.log(user1.email)
console.log(user1.password); 