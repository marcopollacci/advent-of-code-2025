import input from "../common.js";

const initialArray = input.split("\n");
console.log("🚀 ~ input:", input, initialArray);

let dialStart = 50;
let currentDial = dialStart;
let numberOfZeroPoints = 0;

for (let i = 0; i < initialArray.length; i++) {
  const direction = initialArray[i][0];
  const amount = Number(initialArray[i].slice(1));
  const arrayNumber = Array.from({ length: amount });

  for (let j = 0; j < arrayNumber.length; j++) {
    if (direction === "R") {
      currentDial++;
      if (currentDial >= 100) {
        currentDial = 0;
        numberOfZeroPoints++;
      }
    } else if (direction === "L") {
      currentDial--;
      if (currentDial === 0) {
        numberOfZeroPoints++;
      }
      if (currentDial < 0) {
        if (currentDial === 0) {
          numberOfZeroPoints++;
        }
        currentDial = 99;
      }
    }
  }
  console.log("🚀 ~ currentDial:", currentDial);
}

console.log("🚀 ~ numberOfZeroPoints:", numberOfZeroPoints);
