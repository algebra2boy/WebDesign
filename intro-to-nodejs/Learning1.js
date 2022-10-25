var myName = "Apple";
console.log("your name is " + myName);

learningAFunction();
LearingString();
calculation(99);
calculation(100);
lifeInWeeks(56);
console.log(addition(1,3))

function learningAFunction() {
    var a = "3";
    var b = "8";

    // store a copy of the variable 
    var temp = a;
    a = b;
    b = temp;

    console.log("a is " + a);
    console.log("b is " + b);
}

function LearingString() {
    // access the string length 
    var sentence = "What is this doing";
    console.log("how long is the sentence: " + sentence.length);

    // getting the letter from 0th index to 6th index (exclusive)
    first_six_letters = sentence.slice(0,6);
    console.log("first_six_letters is -> " + first_six_letters);

    // make the word to uppercase
    var uppercase = sentence.toUpperCase()
    console.log("uppercase of the sencence is " + uppercase);

}

function learningCrement() {
    var numberOfApple = 10;
    numberOfApple ++;
    numberOfApple += 1;

    numberOfApple -=1;
    numberOfApple --;

}


function calculation(money) {
    // let's say the amount of a water bottle is 3 dollar
    if (money < 0 || count < 0) {
        console.log("Invalid paramater")
    }
    var count = money / 3;
    console.log("the number of water bottle that you can buys is " + count);

}

function lifeInWeeks(year) {
    var days = year * 365;
    var weeks = year * 52;
    var month = year * 12;
    console.log("You have " + days + " days," + weeks + " weeks, and " + month + " left." );
}

function addition(num1, num2){
    return num1 + num2;
}