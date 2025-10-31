const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("the async is called");
    resolve();
  }, 2000);
});

promise1.then(function () {
  console.log("done");
});


// Promise 3
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "aditya", email: "adityavanugure@gmail.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});


// Promise 4
const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({
        username: "nikunj",
        email: "niknnjwandile123@gmail.com",
      });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});

promise4
  .then(function (user) {
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("the function is executed");
  });


// Promise 5
const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({
        username: "javascript",
        email: "javascript@gmail.com",
      });
    } else {
      reject("js went wrong");
    }
  }, 1000);
});

// Async/Await version
async function consumedpromise5() {
  try {
    const pro = await promise5; // waits for the promise to resolve
    console.log(pro);
  } catch (error) {
    console.log(error);
  }
}

consumedpromise5();

// async function guessfetch() {
//     try{
     
//     const response= await fetch( "https://api.github.com/users/hiteshchoudhary");
//     const data= await response.json();
//     console.log(data)
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
    
// }

// guessfetch();

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error=>{
    console.log(error);
}))


const useradi={
    name:"aditya",
    procedure:"b.tech"


}

fetch("https://api.github.com/users/hiteshchoudhary",{useradi});

//options to get the data and send data using methods post,put,delete