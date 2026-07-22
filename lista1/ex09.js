let input = require("readline-sync")
var min = (n1, n2) => {
    if(n1 < n2){
        return n1
    }
    return n2
}
num = min(10, 34)
console.log(num)
