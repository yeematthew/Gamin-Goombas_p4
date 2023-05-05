function fact(x) {
    if (x < 2) {
        return 1 // base case
    }
    return x*fact(x-1)
}

c=document.getElementById("para")
c.innerHTML = fact(3)
console.log(c.innerHTML)
console.log("ran")