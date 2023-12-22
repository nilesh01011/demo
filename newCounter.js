let counterNumber = 4609990;
let conflictAnimation = document.querySelectorAll(".conflict_animation");
let numberCounterDiv = document.getElementById("number-ticker");

// let lastCheckedValue = 0;

function counterTick() {
  // Increment the counter
  counterNumber++;

  // Clear the existing content in numberCounterDiv
  numberCounterDiv.innerHTML = "";

  // Convert the counter to a string and split it into an array of digits
  const counterString = counterNumber.toString().split("");

  counterString.forEach((item) => {
    const span = document.createElement("span");
    span.textContent = item;
    numberCounterDiv.appendChild(span);
    if (counterString.length - 1) {
      // console.log("last span tags", item);
      // "transform: translateY(-" + oneScrollVal + "%)"
    }
  });

  // Check if the counter reaches 10k
  if (counterNumber % 10000 === 0) {
    conflictAnimation.forEach((ele) => {
      // Toggle display between block and none
      ele.style.display = "block";
    });
  }

  // // Check if the counter reaches 11k
  if (counterNumber % 11000 === 0) {
    console.log(counterNumber)
    conflictAnimation.forEach((ele) => {
      console.log(ele)
      if (ele.display === "block") {
        ele.style.display = "none";
      }
    });
  }
}

window.addEventListener("load", function () {
  setInterval(counterTick, 1000); // 600000
});
