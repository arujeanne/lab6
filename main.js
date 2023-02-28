function hello(){
    for (let i = 0; i < 3; i++){
        console.log("Hello, World!")
    }
}

function check(x){
    if (x>0 && x<1){
        console.log(x + " is between 0 and 1")
    }
    else {
        console.log(x + " is not between 0 and 1")
    }
}

function sumOfSquares(a, b){
    console.log("The sum of squares of " + a + " and " + b + " is " + (a*a + b*b))
}