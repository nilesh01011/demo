const numberStart = 4609999;
// const numberStart = 460009990;

// Convert the number to a string
const numberString = numberStart.toString();

// const numberStart = 4610790;

// const thousandsDigit = Math.floor(numberStart / 10000);

// const next10kNumber = Math.ceil(numberStart / 10000) * 10000;

// check previous 10k Reached
// const previous10kReached = thousandsDigit * 10000;

// const previous11kNumberClosed = previous10kReached + 1000;

const conflictAnimation = document.querySelectorAll(
  "#counterDiv .conflict_animation"
);

// let numberReach10k = 0;

// ====================== set counter in localStorage ================
setInterval(() => {
  // Retrieve the current value from localStorage
  const getCounterNumber = localStorage.getItem("countStart"); // x store in location storage

  // Check if the value exists in localStorage
  if (getCounterNumber) {
    // Convert the value to a number, increment it, and update localStorage
    const updatedCounterNumber = Number(getCounterNumber) + 1;
    localStorage.setItem("countStart", updatedCounterNumber.toString());

    const next10kReached = Math.ceil(updatedCounterNumber / 10000) * 10000;

    // // check previous 10k reached
    // if (previous10kReached < updatedCounterNumber) { // true
    //   localStorage.setItem("animationStartWith10k", true);

    //   localStorage.setItem("matchThis11k", previous10kReached);

    //   if (previous10kReached === updatedCounterNumber) { // when number reached to updatedCounterNumber
    //     localStorage.setItem("animationStartWith10k", false);

    //     localStorage.setItem("matchThis11k", next10kReached);
    //   }
    // }

    // check next 10k reached
    if (next10kReached === updatedCounterNumber) {
      localStorage.setItem("matchThis11k", next10kReached + 1000);

      localStorage.setItem("animationStartWith10k", true);
    }

    const animationPopupStart = Boolean(
      localStorage.getItem("animationStartWith10k")
    );

    const get10kNumber = Number(localStorage.getItem("matchThis11k"));

    // let checkNext11kReached = get10kNumber + 1000;

    // animation hidden
    // if (
    //   get10kNumber + 1000 === updatedCounterNumber ||
    //   updatedCounterNumber === previous10kReached + 1000
    // ) {
    //   localStorage.setItem("animationStartWith10k", false);

    //   localStorage.setItem("matchThis11k", next10kReached);
    // }
    if (get10kNumber === updatedCounterNumber) {
      localStorage.setItem("animationStartWith10k", false);

      localStorage.setItem("matchThis11k", next10kReached);
    }

    if (animationPopupStart) {
      // Show animations
      conflictAnimation.forEach((ele) => {
        // Toggle display between block and none
        ele.style.display = animationPopupStart === true ? "block" : "none";
      });
    }
  } else {
    // If the value doesn't exist, initialize it with numberStart
    localStorage.setItem("countStart", numberStart);
  }
}, 800);

// Retrieve the initial value from localStorage and log it
const initialCounterNumber = parseInt(localStorage.getItem("countStart"));

// ========================= old codes =====================
let countStart = Math.floor(initialCounterNumber).toString();

const numberTickerDiv = document.getElementById("number-ticker");

// ===================================================

// const digitPlaceIds = [
//   "digit-place1",
//   "digit-place2",
//   "digit-place3",
//   "digit-place4",
//   "digit-place5",
//   "digit-place6",
//   "digit-place7",
//   "digit-place8",
// ];
// const digitElements = digitPlaceIds.map((id) => document.getElementById(id));

// let counterDigits = countStart.split("").reverse();
// let startValues = counterDigits.map((digit, index) => parseInt(digit) || 0);
// let scrollValues = startValues.map((value) => value * 100);

// window.addEventListener("load", function () {
//   digitElements.forEach((element, index) => {
//     element.style = `transform: translateY(-${scrollValues[index]}%)`;
//   });

//   window.requestAnimationFrame(animateCounter);
//   counterTick(scrollValues[0]);
// });

// function updateScrollValues(currentScrollVal, startVal, nextIndex) {
//   if (currentScrollVal > 900) {
//     scrollValues[nextIndex] = startVal * 100 + (currentScrollVal - 900);
//   }
//   if (
//     currentScrollVal % 100 === 0 &&
//     scrollValues[nextIndex] - startVal * 100 === 99
//   ) {
//     startVal = startVal < 9 ? startVal + 1 : 0;
//     scrollValues[nextIndex] = startVal * 100;
//   }
// }

// function counterTick(index) {
//   setTimeout(() => {
//     index = index < 999 ? index + 1 : 0;
//     scrollValues[0] = index;

//     for (let i = 0; i < scrollValues.length - 1; i++) {
//       if (scrollValues[i] > 900) {
//         updateScrollValues(scrollValues[i], startValues[i], i + 1);
//       }
//     }

//     // ==================Add my Manually===================

//     if (scrollValues[7] > 900) {
//       updateScrollValues(scrollValues[7], startValues[7], 6);
//     }

//     counterTick(index);
//   }, 7);
// }

// function animateCounter() {
//   digitElements.forEach((element, index) => {
//     element.style = `transform: translateY(-${scrollValues[index]}%)`;
//   });
//   window.requestAnimationFrame(animateCounter);
// }

// ===================================================

const one = document.getElementById("digit-place1");
const ten = document.getElementById("digit-place2");
const hundred = document.getElementById("digit-place3");
const oneK = document.getElementById("digit-place4");
const tenK = document.getElementById("digit-place5");
const hundredK = document.getElementById("digit-place6");
const oneM = document.getElementById("digit-place7");
// add my manually
// const tenM = document.getElementById("digit-place8");

// const elevenM = document.getElementById("digit-place9");

// function dynamicCounter(numberLength) {
//   // Create a new div element
//   const newElement = document.createElement("div");

//   // Set id and class attributes
//   newElement.setAttribute("id", `digit-place${numberString.length}`);
//   newElement.setAttribute("class", "digit");

//   // Create and append inner div elements with class "col-num"
//   for (let i = 0; i < 10; i++) {
//     const innerDiv = document.createElement("div");
//     innerDiv.setAttribute("class", "col-num");
//     innerDiv.textContent = i; // Set the text content to the current digit
//     newElement.appendChild(innerDiv);
//   }

//   // Append the outer div to the body (or any other parent element)
//   numberTickerDiv.prepend(newElement);
// }

// if (numberString.length > 7) {
//   // console.log("Number is greater than 7")
//   // numberTickerDiv
//   dynamicCounter(numberString.length);
// }

let counterDigits = countStart.split("").reverse();
// let counterDigits = 456789;

let oneStartVal = counterDigits[0] ? parseInt(counterDigits[0]) : 0;
let tenStartVal = counterDigits[1] ? parseInt(counterDigits[1]) : 0;
let hundredStartVal = counterDigits[2] ? parseInt(counterDigits[2]) : 0;
let oneKStartVal = counterDigits[3] ? parseInt(counterDigits[3]) : 0;
let tenKStartVal = counterDigits[4] ? parseInt(counterDigits[4]) : 0;
let hundredKStartVal = counterDigits[5] ? parseInt(counterDigits[5]) : 0;
let oneMStartVal = counterDigits[6] ? parseInt(counterDigits[6]) : 0;
// add my manually
// let tenMStartVal = counterDigits[7] ? parseInt(counterDigits[7]) : 0;

// let elevenMStartVal = counterDigits[8] ? parseInt(counterDigits[8]) : 0;

// value
let oneScrollVal = oneStartVal * 100;
let tenScrollVal = tenStartVal * 100;
let hundredScrollVal = hundredStartVal * 100;
let oneKScrollVal = oneKStartVal * 100;
let tenKScrollVal = tenKStartVal * 100;
let hundredKScrollVal = hundredKStartVal * 100;
let oneMScrollVal = oneMStartVal * 100;
// add my manually
// let tenMScrollVal = tenMStartVal * 100;

// let elevenMScrollVal = elevenMStartVal * 100;

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

// numbers
function counterTick(index) {
  setTimeout(() => {
    index = index < 999 ? index + 1 : 0;
    oneScrollVal = index;

    if (oneScrollVal > 900) {
      tenScrollVal = tenStartVal * 100 + (oneScrollVal - 900);
    }
    if (oneScrollVal === 0 && tenScrollVal - tenStartVal * 100 === 99) {
      tenStartVal = tenStartVal < 9 ? tenStartVal + 1 : 0;
      tenScrollVal = tenStartVal * 100;
    }
    if (tenScrollVal > 900) {
      hundredScrollVal = hundredStartVal * 100 + (tenScrollVal - 900);
    }
    if (
      tenScrollVal % 100 === 0 &&
      hundredScrollVal - hundredStartVal * 100 === 99
    ) {
      hundredStartVal = hundredStartVal < 9 ? hundredStartVal + 1 : 0;
      hundredScrollVal = hundredStartVal * 100;
    }
    if (hundredScrollVal > 900) {
      oneKScrollVal = oneKStartVal * 100 + (hundredScrollVal - 900);
    }
    if (
      hundredScrollVal % 100 === 0 &&
      oneKScrollVal - oneKStartVal * 100 === 99
    ) {
      oneKStartVal = oneKStartVal < 9 ? oneKStartVal + 1 : 0;
      oneKScrollVal = oneKStartVal * 100;
    }
    if (oneKScrollVal > 900) {
      tenKScrollVal = tenKStartVal * 100 + (oneKScrollVal - 900);
    }
    if (
      oneKScrollVal % 100 === 0 &&
      tenKScrollVal - tenKStartVal * 100 === 99
    ) {
      tenKStartVal = tenKStartVal < 9 ? tenKStartVal + 1 : 0;
      tenKScrollVal = tenKStartVal * 100;
    }
    if (tenKScrollVal > 900) {
      hundredKScrollVal = hundredKStartVal * 100 + (tenKScrollVal - 900);
    }
    if (
      tenKScrollVal % 100 === 0 &&
      hundredKScrollVal - hundredKStartVal * 100 === 99
    ) {
      hundredKStartVal = hundredKStartVal < 9 ? hundredKStartVal + 1 : 0;
      hundredKScrollVal = hundredKStartVal * 100;
    }
    if (hundredKScrollVal > 900) {
      oneMScrollVal = oneMStartVal * 100 + (hundredKScrollVal - 900);
    }
    if (
      hundredKScrollVal % 100 === 0 &&
      oneMScrollVal - oneMStartVal * 100 === 99
    ) {
      oneMStartVal = oneMStartVal < 9 ? oneMStartVal + 1 : 0;
      oneMScrollVal = oneMStartVal * 100;
    }

    // ==================Add my Manually===================

    // if (tenMScrollVal > 900) {
    //   oneMScrollVal = oneMStartVal * 100 + (tenMScrollVal - 900);
    // }
    // if (
    //   tenMScrollVal % 100 === 0 &&
    //   oneMScrollVal - oneMStartVal * 100 === 99
    // ) {
    //   oneMStartVal = oneMStartVal < 9 ? oneMStartVal + 1 : 0;
    //   oneMScrollVal = oneMStartVal * 100;
    // }



    // if (elevenMScrollVal > 900) {
    //   tenMScrollVal = tenMScrollVal * 100 + (tenMScrollVal - 900);
    // }
    // if (
    //   elevenMScrollVal % 100 === 0 &&
    //   tenMScrollVal - tenMScrollVal * 100 === 99
    // ) {
    //   tenMScrollVal = tenMScrollVal < 9 ? tenMScrollVal + 1 : 0;
    //   tenMScrollVal = tenMScrollVal * 100;
    // }

    counterTick(index);
  }, 7);
}

function animateCounter() {
  one.style = "transform: translateY(-" + oneScrollVal + "%)";
  ten.style = "transform: translateY(-" + tenScrollVal + "%)";
  hundred.style = "transform: translateY(-" + hundredScrollVal + "%)";
  oneK.style = "transform: translateY(-" + oneKScrollVal + "%)";
  tenK.style = "transform: translateY(-" + tenKScrollVal + "%)";
  hundredK.style = "transform: translateY(-" + hundredKScrollVal + "%)";
  oneM.style = "transform: translateY(-" + oneMScrollVal + "%)";
  // add my manually
  // tenM.style = "transform: translateY(-" + tenMScrollVal + "%)";

  // elevenM.style = "transform: translateY(-" + elevenMScrollVal + "%)";
  
  window.requestAnimationFrame(animateCounter);
}
