// let counterNumber = 4608990;
let counterNumber = 4609990;
// let counterNumber = 4610980;
let conflictAnimation = document.querySelectorAll(".conflict_animation");
let numberCounterDiv = document.getElementById("number-ticker");

// let lastCheckedValue = 0;

let numberReach10k = 0;

function counterTick() {
  // Increment the counter
  counterNumber++;

  // let shartCounterNext = false;

  let next10k = Math.ceil(counterNumber / 10000) * 10000;

  // check 10k reached
  if (next10k === counterNumber) {
    // shartCounterNext = true;

    localStorage.setItem("matchThis11k", next10k);

    // numberReach10k += counterNumber;
    // Show animations
    conflictAnimation.forEach((ele) => {
      // Toggle display between block and none
      ele.style.display = "block";
    });

    // console.log("animation closed in this counter:", numberReach10k + 1000);
    // console.log("current Number:", updatedCounterNumber);
    // console.log(
    //   "numberReach10k + 1000 === updatedCounterNumber:",
    //   numberReach10k + 1000 === updatedCounterNumber
    // );
  }

  const get10kNumber = Number(localStorage.getItem("matchThis11k"));

  let check11kNumber = get10kNumber + 1000;

  // console.log("check11kNumber:", check11kNumber);

  // console.log(
  //   "number match with check11kNumber == updatedCounterNumber",
  //   check11kNumber == counterNumber
  // );

  // console.log("updateCounterNumber:", counterNumber);

  // animation hidden
  if (check11kNumber == counterNumber) {
    // Show animations
    conflictAnimation.forEach((ele) => {
      // Toggle display between block and none
      ele.style.display = "none";
    });

    localStorage.setItem("matchThis11k", next10k);
  }

  // console.log(counterNumber)

  // Clear the existing content in numberCounterDiv
  // numberCounterDiv.innerHTML = "";

  // Get last digit
  const lastDigit = counterNumber % 10;

  // Update DOM
  numberCounterDiv.textContent = lastDigit;

  // Convert the counter to a string and split it into an array of digits
  const counterString = counterNumber.toString().split("");

  counterString.forEach((item) => {
    const span = document.createElement("span");
    span.textContent = item;
    numberCounterDiv.appendChild(span);
  });
}

window.addEventListener("load", function () {
  // setInterval(counterTick, 4); // 600000
  setInterval(counterTick, 1000); // 600000
});
