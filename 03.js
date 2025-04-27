const balance = new Number(100);
console.log(balance.toString().length);
console.log(typeof(balance));

console.log(balance.toFixed(1));

const otherno=230.8888
console.log(otherno.toPrecision(3));


let hundreds=10000000000;


console.log(hundreds.toLocaleString());
let indian=hundreds.toLocaleString('en-In',{
    style:"currency",
    currency:"INR",
    minimumFractionDigits:6,
    
});
console.log(indian);







