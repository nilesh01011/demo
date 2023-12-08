let countStart = Math.floor(71999990).toString();
const one = document.getElementById("digit-place1");
const ten = document.getElementById("digit-place2");
const hundred = document.getElementById("digit-place3");
const oneK = document.getElementById("digit-place4");
const tenK = document.getElementById("digit-place5");
const hundredK = document.getElementById("digit-place6");
const oneM = document.getElementById("digit-place7");
const tenM = document.getElementById("digit-place8");

let counterDigits = countStart.split("").reverse();

let oneStartVal = counterDigits[0] ? parseInt(counterDigits[0]) : 0;
let tenStartVal = counterDigits[1] ? parseInt(counterDigits[1]) : 0;
let hundredStartVal = counterDigits[2] ? parseInt(counterDigits[2]) : 0;
let oneKStartVal = counterDigits[3] ? parseInt(counterDigits[3]) : 0;
let tenKStartVal = counterDigits[4] ? parseInt(counterDigits[4]) : 0;
let hundredKStartVal = counterDigits[5] ? parseInt(counterDigits[5]) : 0;
let oneMStartVal = counterDigits[6] ? parseInt(counterDigits[6]) : 0;
let tenMStartVal = counterDigits[7] ? parseInt(counterDigits[7]) : 0;

let oneScrollVal = oneStartVal * 100;
let tenScrollVal = tenStartVal * 100;
let hundredScrollVal = hundredStartVal * 100;
let oneKScrollVal = oneKStartVal * 100;
let tenKScrollVal = tenKStartVal * 100;
let hundredKScrollVal = hundredKStartVal * 100;
let oneMScrollVal = oneMStartVal * 100;
let tenMScrollVal = tenMStartVal * 100;

let conflict_animation = document.querySelectorAll(".conflict_animation");

window.addEventListener("load", function () {
  one.style = "transform: translateY(-" + oneScrollVal + "%)";
  ten.style = "transform: translateY(-" + tenScrollVal + "%)";
  hundred.style = "transform: translateY(-" + hundredScrollVal + "%)";
  oneK.style = "transform: translateY(-" + oneKScrollVal + "%)";
  tenK.style = "transform: translateY(-" + tenKScrollVal + "%)";
  hundredK.style = "transform: translateY(-" + hundredKScrollVal + "%)";
  oneM.style = "transform: translateY(-" + oneMScrollVal + "%)";
  tenM.style = "transform: translateY(-" + tenMScrollVal + "%)";
  window.requestAnimationFrame(animateCounter);
  counterTick(oneScrollVal);
});

function counterTick(index) {
  setTimeout(() => {
    index = index < 999 ? index + 1 : 0;
    oneScrollVal = index;

    if (oneScrollVal > 900) {
      tenScrollVal = tenStartVal * 100 + (oneScrollVal - 900);
      // console.log("oneScrollVal > 900")
    }
    if (oneScrollVal === 0 && tenScrollVal - tenStartVal * 100 === 99) {
      tenStartVal = tenStartVal < 9 ? tenStartVal + 1 : 0;
      tenScrollVal = tenStartVal * 100;
      // console.log("oneScrollVal === 0 && tenScrollVal - tenStartVal * 100 === 99")
    }
    if (tenScrollVal > 900) {
      hundredScrollVal = hundredStartVal * 100 + (tenScrollVal - 900);
      // console.log("tenScrollVal > 900")
    }
    if (
      tenScrollVal % 100 === 0 &&
      hundredScrollVal - hundredStartVal * 100 === 99
    ) {
      hundredStartVal = hundredStartVal < 9 ? hundredStartVal + 1 : 0;
      hundredScrollVal = hundredStartVal * 100;
      // console.log("tenScrollVal % 100 === 0 && hundredScrollVal - hundredStartVal * 100 === 99")
    }
    if (hundredScrollVal > 900) {
      oneKScrollVal = oneKStartVal * 100 + (hundredScrollVal - 900);
      // console.log("hundredScrollVal > 900")
    }
    if (
      hundredScrollVal % 100 === 0 &&
      oneKScrollVal - oneKStartVal * 100 === 99
    ) {
      oneKStartVal = oneKStartVal < 9 ? oneKStartVal + 1 : 0;
      oneKScrollVal = oneKStartVal * 100;
      // console.log("hundredScrollVal % 100 === 0 && oneKScrollVal - oneKStartVal * 100 === 99")
    }
    if (oneKScrollVal > 900) {
      tenKScrollVal = tenKStartVal * 100 + (oneKScrollVal - 900);
      // console.log("oneKScrollVal > 900")
    }
    if (
      oneKScrollVal % 100 === 0 &&
      tenKScrollVal - tenKStartVal * 100 === 99
    ) {
      tenKStartVal = tenKStartVal < 9 ? tenKStartVal + 1 : 0;
      tenKScrollVal = tenKStartVal * 100;
      // console.log("oneKScrollVal % 100 === 0 && tenKScrollVal - tenKStartVal * 100 === 99")
    }
    if (tenKScrollVal > 900) {
      hundredKScrollVal = hundredKStartVal * 100 + (tenKScrollVal - 900);
      // console.log("tenKScrollVal > 900")
    }
    if (
      tenKScrollVal % 100 === 0 &&
      hundredKScrollVal - hundredKStartVal * 100 === 99
    ) {
      hundredKStartVal = hundredKStartVal < 9 ? hundredKStartVal + 1 : 0;
      hundredKScrollVal = hundredKStartVal * 100;
      // console.log("tenKScrollVal % 100 === 0 && hundredKScrollVal - hundredKStartVal * 100 === 99")
    }
    if (hundredKScrollVal > 900) {
      oneMScrollVal = oneMStartVal * 100 + (hundredKScrollVal - 900);
      // console.log("hundredKScrollVal > 900")
    }
    if (
      hundredKScrollVal % 100 === 0 &&
      oneMScrollVal - oneMStartVal * 100 === 99
    ) {
      oneMStartVal = oneMStartVal < 9 ? oneMStartVal + 1 : 0;
      oneMScrollVal = oneMStartVal * 100;
      // console.log("hundredKScrollVal % 100 === 0 && oneMScrollVal - oneMStartVal * 100 === 99")
    }
    if (tenMScrollVal > 900) {
      oneMScrollVal = oneMStartVal * 100 + (tenMScrollVal - 900);
      // console.log("tenMScrollVal > 900")
    }
    if (
      tenMScrollVal % 100 === 0 &&
      oneMScrollVal - oneMStartVal * 100 === 99
    ) {
      oneMStartVal = oneMStartVal < 9 ? oneMStartVal + 1 : 0;
      oneMScrollVal = oneMStartVal * 100;
      // console.log("tenMScrollVal % 100 === 0 && oneMScrollVal - oneMStartVal * 100 === 99")

      // check if counter reached to the lakhs then display block of conflict
      conflict_animation.forEach((ele) => {
        ele.style.display = "block";
      });
    }
    // Check if the counter reached the desired value
    // checkCounterValue();
    counterTick(index);
  }, 4);
}

// check if the conflict animation is running then display none
if (conflict_animation) {
  conflict_animation.forEach((ele) => {
    setInterval(() => {
      if (ele.style.display === "block") {
        return (ele.style.display = "none");
      }
    }, 8000);
  });
}

// function checkCounterValue() {
//   // Check if the counter reached the desired value
//   const currentCounterValue = parseInt(
//     `${oneStartVal}${tenStartVal}${hundredStartVal}${oneKStartVal}${tenKStartVal}${hundredKStartVal}${oneMStartVal}${tenMStartVal}`
//   );
//   if (currentCounterValue === 72000000) {
//     console.log("Counter reached 72,000,000");
//     // Add any actions you want to perform when the counter reaches 72,000,000
//   }
// }

function animateCounter() {
  one.style = "transform: translateY(-" + oneScrollVal + "%)";
  ten.style = "transform: translateY(-" + tenScrollVal + "%)";
  hundred.style = "transform: translateY(-" + hundredScrollVal + "%)";
  oneK.style = "transform: translateY(-" + oneKScrollVal + "%)";
  tenK.style = "transform: translateY(-" + tenKScrollVal + "%)";
  hundredK.style = "transform: translateY(-" + hundredKScrollVal + "%)";
  oneM.style = "transform: translateY(-" + oneMScrollVal + "%)";
  tenM.style = "transform: translateY(-" + tenMScrollVal + "%)";
  window.requestAnimationFrame(animateCounter);
}
