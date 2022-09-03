function matchHouses(steps) {
  let sum = 6;
  if (steps == 1) {
    console.log("6");
  } else {
    let n = steps;
    while (n >= 2) {
      sum += 5;
      n--;
    }
    console.log(sum);
  }
}

matchHouses(87);
