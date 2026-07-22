for(let i = 1; i <= 100; i++){
    let num = `${i}`
    if (i % 3 == 0){
        num += "Fizz"
    }
    if(i % 5 == 0){
        num += "Buzz"
    }
    console.log(num)
}
