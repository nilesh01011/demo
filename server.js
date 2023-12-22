// // old
// var countStart = Math.floor(46088800).toString();
// // let countStart = 4608880

// // new
// let countStartAnimation = Math.floor(4609990).toString();
// // let countStartAnimation = 4609990

// let diffrent = Math.floor(countStart) - Math.floor(countStartAnimation);
// // let diff = countStartAnimation - countStart

// setInterval(() => {
//   // countStart = countStart + diff;
//   countStart = Math.floor(countStart) + Math.floor(diffrent);
//   countStart = countStart.toString();

//   // countStart = countStart.toString();
//   // console.log("setInterval",countStart)
// }, 3000);

// console.log(countStart)

const numberStart = 4609910;

const conflictAnimation = document.querySelectorAll(
  "#counterDiv .conflict_animation"
);

// setInterval(() => {
//   // Retrieve the current value from localStorage
//   const getCounterNumber = localStorage.getItem("countStart");

//   // Check if the value exists in localStorage
//   if (getCounterNumber) {
//     // Convert the value to a number, increment it, and update localStorage
//     const updatedCounterNumber = Number(getCounterNumber) + 1;
//     localStorage.setItem("countStart", updatedCounterNumber.toString());

//     // Log the updated counter value
//     console.log("Updated Counter Number:", updatedCounterNumber);
//   } else {
//     // If the value doesn't exist, initialize it with countStart
//     localStorage.setItem("countStart", numberStart);
//   }
// }, 1000);

setInterval(() => {
  // Retrieve the current value from localStorage
  const getCounterNumber = localStorage.getItem("countStart");

  // Check if the value exists in localStorage
  if (getCounterNumber) {
    // Convert the value to a number, increment it, and update localStorage
    const updatedCounterNumber = Number(getCounterNumber) + 1;
    localStorage.setItem("countStart", updatedCounterNumber.toString());

    // Log the updated counter value
    // console.log("Updated Counter Number:", updatedCounterNumber);

    // Check if the updated counter reaches a multiple of 10,000
    // if (updatedCounterNumber % 10000 === 0) {
    //   // Show the conflict animation
    //   conflictAnimation.forEach((ele) => {
    //     // Toggle display between block and none
    //     // ele.style.display = "block";
    //     ele.classList.add("hidden");
    //   });
    // }

    if (updatedCounterNumber % 11000 === 0) {
      console.log("Condition is true",updatedCounterNumber);
    } else {
      console.log("Condition is false",updatedCounterNumber);
    }

    // Check if the updated counter reaches a multiple of 10,000
    if (updatedCounterNumber % 11000 === 0) {
      // Show the conflict animation
      conflictAnimation.forEach((ele) => {
        // Toggle display between block and none
        // ele.style.display = "block";
        ele.classList.remove("hidden");
      });
    }
  } else {
    // If the value doesn't exist, initialize it with numberStart
    localStorage.setItem("countStart", numberStart);
  }
}, 100);

// Retrieve the initial value from localStorage and log it
const initialCounterNumber = parseInt(localStorage.getItem("countStart"));

console.log("Initial Counter Number:", initialCounterNumber);

let countStart = Math.floor(initialCounterNumber).toString();

const one = document.getElementById("digit-place1");
const ten = document.getElementById("digit-place2");
const hundred = document.getElementById("digit-place3");
const oneK = document.getElementById("digit-place4");
const tenK = document.getElementById("digit-place5");
const hundredK = document.getElementById("digit-place6");
const oneM = document.getElementById("digit-place7");
// const tenM = document.getElementById("digit-place8");

let counterDigits = countStart.split("").reverse();
// let counterDigits = 456789;

let oneStartVal = counterDigits[0] ? parseInt(counterDigits[0]) : 0;
let tenStartVal = counterDigits[1] ? parseInt(counterDigits[1]) : 0;
let hundredStartVal = counterDigits[2] ? parseInt(counterDigits[2]) : 0;
let oneKStartVal = counterDigits[3] ? parseInt(counterDigits[3]) : 0;
let tenKStartVal = counterDigits[4] ? parseInt(counterDigits[4]) : 0;
let hundredKStartVal = counterDigits[5] ? parseInt(counterDigits[5]) : 0;
let oneMStartVal = counterDigits[6] ? parseInt(counterDigits[6]) : 0;
// let tenMStartVal = counterDigits[7] ? parseInt(counterDigits[7]) : 0;

let oneScrollVal = oneStartVal * 100;
let tenScrollVal = tenStartVal * 100;
let hundredScrollVal = hundredStartVal * 100;
let oneKScrollVal = oneKStartVal * 100;
let tenKScrollVal = tenKStartVal * 100;
let hundredKScrollVal = hundredKStartVal * 100;
let oneMScrollVal = oneMStartVal * 100;
// let tenMScrollVal = tenMStartVal * 100;

let conflict_animation = document.querySelectorAll(".conflict_animation");

window.addEventListener("load", function () {
  ten.style = "transform: translateY(-" + tenScrollVal + "%)";
  hundred.style = "transform: translateY(-" + hundredScrollVal + "%)";
  oneK.style = "transform: translateY(-" + oneKScrollVal + "%)";
  tenK.style = "transform: translateY(-" + tenKScrollVal + "%)";
  hundredK.style = "transform: translateY(-" + hundredKScrollVal + "%)";
  oneM.style = "transform: translateY(-" + oneMScrollVal + "%)";
  // tenM.style = "transform: translateY(-" + tenMScrollVal + "%)";
  window.requestAnimationFrame(animateCounter);
  // console.log(oneScrollVal);
  counterTick(oneScrollVal);
});

let isConflictAnimationVisible = false;

function counterTick(index) {
  setTimeout(() => {
    index = index < 999 ? index + 1 : 0;
    oneScrollVal = index;

    if (oneScrollVal > 900) {
      tenScrollVal = tenStartVal * 100 + (oneScrollVal - 900);
      // console.log("99 = oneScrollVal > 900")
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
      // every 100 reached counter
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
      // reached 1000 counter
      // console.log("hundredScrollVal % 100 === 0 && oneKScrollVal - oneKStartVal * 100 === 99")

      // check if counter reached to the lakhs then display block of conflict
      // conflict_animation.forEach((ele) => {
      //   if (ele.style.display === "block") {
      //     ele.style.display = "none";
      //   }
      //   console.log(ele.style.display);
      // });
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

      // check if counter reached to the lakhs then display block of conflict
      // conflict_animation.forEach((ele) => {
      //   ele.style.display = "block";
      // });

      // // Checking counter number reached to the 10k
      // if (oneScrollVal >= 10000 && !isConflictAnimationVisible) {
      //   console.log("10000", oneScrollVal);
      //   isConflictAnimationVisible = true;

      //   // showing conflict animation
      //   conflict_animation.forEach((ele) => {
      //     ele.style.display = "block";
      //   });
      // }

      // // check counter reached after 11k then hide conflict animation
      // if (oneScrollVal >= 11000 && isConflictAnimationVisible) {
      //   console.log("11000", oneScrollVal);
      //   isConflictAnimationVisible = false;

      //   // showing conflict animation
      //   conflict_animation.forEach((ele) => {
      //     ele.style.display = "none";
      //   });
      // }
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

    // if (tenMScrollVal > 900) {
    //   oneMScrollVal = oneMStartVal * 100 + (tenMScrollVal - 900);
    //   // console.log("tenMScrollVal > 900")
    // }
    // if (
    //   tenMScrollVal % 100 === 0 &&
    //   oneMScrollVal - oneMStartVal * 100 === 99
    // ) {
    //   oneMStartVal = oneMStartVal < 9 ? oneMStartVal + 1 : 0;
    //   oneMScrollVal = oneMStartVal * 100;
    //   // console.log("tenMScrollVal % 100 === 0 && oneMScrollVal - oneMStartVal * 100 === 99")
    // }

    counterTick(index);
  }, 1);
}

function animateCounter() {
  one.style = "transform: translateY(-" + oneScrollVal + "%)";
  ten.style = "transform: translateY(-" + tenScrollVal + "%)";
  hundred.style = "transform: translateY(-" + hundredScrollVal + "%)";
  oneK.style = "transform: translateY(-" + oneKScrollVal + "%)";
  tenK.style = "transform: translateY(-" + tenKScrollVal + "%)";
  hundredK.style = "transform: translateY(-" + hundredKScrollVal + "%)";
  oneM.style = "transform: translateY(-" + oneMScrollVal + "%)";
  // tenM.style = "transform: translateY(-" + tenMScrollVal + "%)";
  window.requestAnimationFrame(animateCounter);
}
