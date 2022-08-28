//1.Javascript pattern printing
let number = 1;
let output = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j < i; ++j) {
    output += number + " ";
    ++number;
  }
  output += "\n";
}
console.log(output);

//2.Armstrong Number
let sum = 0;
const amstrongNumberCheck = 153;

let temp = amstrongNumberCheck; //Give Input here to check amstrong number
while (temp > 0) {
  let remainder = temp % 10;

  sum += remainder * remainder * remainder;

  temp = parseInt(temp / 10);
}
if (sum == amstrongNumberCheck) {
  console.log(`${amstrongNumberCheck} is an Armstrong Number`);
} else {
  console.log(`${amstrongNumberCheck} is not an Armstrong Number.`);
}

//3.Given number is special or not
let sum1 = 0;
const specialNumberCheck = 145;

let temp1 = specialNumberCheck; //Give Input here to check special number
while (temp1 > 0) {
  let remainder = temp1 % 10;
  let multiply = 1;
  for (let i = remainder; remainder >= 1; remainder--) {
    multiply *= remainder;
  }
  sum1 += multiply;

  temp1 = parseInt(temp1 / 10);
}
if (sum1 == specialNumberCheck) {
  console.log(`${specialNumberCheck} is an Special Number`);
} else {
  console.log(`${specialNumberCheck} is not an Special Number.`);
}
