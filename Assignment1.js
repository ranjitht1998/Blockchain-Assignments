
// program to check leap year
function checkLeapYear(year) {

    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

checkLeapYear(2012);

// Program to convert temperatures to and from Celsius,Fahrenheit.
function cToF(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);


// Program to check factorial of a number
function factorial(number){
    if (number < 0) {
        console.log('Error! Factorial for negative number does not exist.');
    }else if (number === 0) {
        console.log(`The factorial of ${number} is 1.`);
    }
    else {
        let fact = 1;
        for (i = 1; i <= number; i++) {
            fact *= i;
        }
        console.log(`The factorial of ${number} is ${fact}.`);
    }
}

factorial(3);