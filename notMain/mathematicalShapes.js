function squareDiagonal(side) {
  const diagonal = (2 * (side ^ 2)) ^ 0.5;
  return diagonal;
}

function triangleArea(sideA, sideB, sideC) {
  const semiPerimeter = (sideA + sideB + sideC) / 2;
  const area =
    (semiPerimeter *
      (semiPerimeter - sideA) *
      (semiPerimeter - sideB) *
      (semiPerimeter - sideC)) ^
    0.5;
  return area;
}

function circleCirunference(radius) {
  const circunferen = 2 * Math.PI * radius;
  return Math.round(circunferen * 100) / 100;
}

console.log("Square diagonal", squareDiagonal(9));
console.log("Triangle area", triangleArea(5, 6, 7));
console.log("Circunference", circleCirunference(4));
