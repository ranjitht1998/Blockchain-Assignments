//1.Check triangle is equilateral,isosceles or scalene

function checkTriangle(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    console.log("Equilateral triangle");
  } else if (side1 == side2 || side2 == side3 || side3 == side1) {
    console.log("Isosceles Triangle");
  } else {
    console.log("Scalene Triangle");
  }
}

checkTriangle(1, 2, 3);

//2.Grade based on student mark

function gradeBasedOnMark(mark) {
  switch (Math.trunc(mark / 10)) {
    case 10:
      console.log("S Grade");
      break;
    case 9:
      console.log("S Grade");
      break;
    case 8:
      console.log("A Grade");
      break;
    case 7:
      console.log("B Grade");
      break;
    case 6:
      console.log("C Grade");
      break;
    case 5:
      console.log("D Grade");
      break;
    case 4:
      console.log("E Grade");
      break;
    default:
      console.log("Student has failed");
      break;
  }
}

gradeBasedOnMark(40);

//3.JavaScript program to find the sum of the multiples of 3 and 5 under 1000

let sum = 0;
for (let x = 0; x < 1000; x++) {
  if (x % 3 === 0 && x % 5 === 0) {
    sum += x;
  }
}
console.log(sum);

//4.Program to find the factorial of all prime numbers between a given range

function prime(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    if (i === 1) {
      console.log("1 is neither prime nor composite number.");
    } else if (i > 1) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          isPrime = false;
          sum = 0;
          multiply = 1;
          break;
        }
      }
      if (isPrime) {
        let sum = 0;
        let multiply = 1;
        for (let k = i; k >= 1; k--) {
          multiply *= k;
        }
        sum += multiply;

        console.log(`Factorial of ${i} is ${sum}`);
        sum = 0;
        multiply = 1;
      }
    }
  }
}

prime(2, 10);
