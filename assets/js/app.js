// ** Q1: Temperature Conversion Program **


do {
    var num1 = parseInt(prompt(`Temperature Converter
1 Convert Celsius To Fahrenheit
2 Convert Fahrenheit to Celsius`));
    if (num1 === 1) {
        var c = parseFloat(prompt("Enter temperature in Celsius:"));
        alert("Temperature in Fahrenheit: " + (c * 9 / 5 + 32));
    } else if (num1 === 2) {
        var f = parseFloat(prompt("Enter temperature in Fahrenheit:"));
        alert("Temperature in Celsius: " + ((f - 32) * 5 / 9));
    }
    var num3 = prompt("Do you want to continue? Press 'Y' to continue or any key to cancel.");
} while (num3 === "Y" || num3 === "y");


// ** Q2: Sum of Numbers Until 0 **


var sum = 0;
do {
    var num = parseFloat(prompt("Enter a number (Press 0 to stop):"));
    sum += num;
} while (num !== 0);
alert("Sum of all entered numbers: " + sum);


// ** Q3: Count Vowels **


let count = 0;
let vowelCount = 0;
do {
    let input = prompt("Enter an alphabet: (Total vowels: " + vowelCount + ")");
    if (input.match(/[aeiou]/i)) {
        vowelCount++;
    }
    count++;
    choice = prompt("Do you want to continue? Press 'Y' to continue or any key to cancel.");
} while (choice === "Y" || choice === "y");
alert("You entered a total of " + count + " letters, and " + vowelCount + " of them are vowels.");


// ** Q4: Prime Numbers **


let num = parseInt(prompt("Enter a number to check if it's prime or not"));
if (num < 2) {
    alert("It's not a prime number");
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        alert("It's a prime number");
    } else {
        alert("It's not a prime number");
    }
}


// ** Q5: Print a Pattern(Increasing Stars) **


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}


// ** Q6: Print a Pattern(Decreasing Stars) **


for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
