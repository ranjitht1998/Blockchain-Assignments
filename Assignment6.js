// 1.Operations to provide the implementation for a rectangle class.

class Reactangle {
  area(length, breadth) {
    let areaRectangle = length * breadth;
    let areaSquare = length * length;
    // console.log(areaSquare, "in");
    return `Area of square ${areaSquare} and reactangle ${areaRectangle}`;
  }
}

class Square extends Reactangle {
  constructor(len, bre) {
    super();
    super.area(len, bre);
  }
}

let object = new Square();
console.log(object.area(2, 3));

// 2.Write a javascript function find_largest to return the nth largest number in an array

let numbers = [3, 45, 6, 7, 23, 5, 7, 8];

function find_largest(n) {
  let final = numbers.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  let uniqueNum = [...new Set(final)];
  console.log(uniqueNum[uniqueNum.length - n + 1]);
}

find_largest(4);

// 3. Dashes between even numbers

function computeDash(n) {
  const str = n.toString();
  const result = [str[0]];
  for (let x = 1; x < str.length; x++) {
    if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
      result.push("-", str[x]);
    } else {
      result.push(str[x]);
    }
  }
  console.log(result.join(""));
}

computeDash("025468");
