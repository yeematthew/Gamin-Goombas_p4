// function fact(x) {
//     if (x < 2) {
//         return 1 // base case
//     }
//     return x*fact(x-1)
// }

// c=document.getElementById("para")
// c.innerHTML = fact(3)
// console.log(c.innerHTML)
// console.log("ran")

function initialize(data) {
    console.log("working")
    console.log(data)
    console.log(data["blah"])
}

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("sales.db");


console.log("ran")
