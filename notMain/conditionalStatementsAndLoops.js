function largestInt(int1, int2) {
  return int1 > int2 ? int1 : int2;
}

const int1 = Math.round(Math.random() * 100);
const int2 = Math.round(Math.random() * 100);
console.log(`The largest of ${int1} and ${int2} is ${largestInt(int1, int2)}`);

function evenOrOdd(int) {
  return int % 2 == 0 ? "Even" : "Odd";
}

const int = Math.round(Math.random() * 100);
console.log(`The number ${int} is ${evenOrOdd(int)}`);
