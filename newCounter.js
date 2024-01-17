let counterNumber = 4608990;
// let counterNumber = 4609990;
// let counterNumber = 4610980;
let conflictAnimation = document.querySelectorAll(".conflict_animation");
let numberCounterDiv = document.getElementById("number-ticker");

// let lastCheckedValue = 0;

let numberReach10k = 0;

function counterTick() {
  // Increment the counter
  counterNumber++;

  let shartCounterNext = false;

  let next10k = Math.ceil(counterNumber / 10000) * 10000;

  if (next10k === counterNumber) {
    // console.log("animations show");
    // console.log("next10k === counterNumber:",next10k === counterNumber);
    // console.log("animations show");
    shartCounterNext = true;

    numberReach10k = counterNumber;
    // Show animations
    conflictAnimation.forEach((ele) => {
      // Toggle display between block and none
      ele.style.display = "block";
      // console.log(ele)
    });

    console.log("animation closed in this counter:", numberReach10k + 1000);
    console.log("current Number:", counterNumber);

    if (numberReach10k + 1000 === counterNumber) {
      console.log(
        "11k numberReach10k + 1000 === counterNumber:",
        numberReach10k + 1000 === counterNumber
      );
    }
  }

  // if (numberReach10k === counterNumber) {
  //   console.log("numberReach10k === counterNumber",numberReach10k === counterNumber,numberReach10k," ",counterNumber)
  //   console.log("Checking numberReach10k + 1000 === counterNumber:",numberReach10k + 1000 === counterNumber)
  //   if (numberReach10k + 1000 === counterNumber) {
  //     console.log("animations hides");
  //     shartCounterNext = false;
  //     numberReach10k = 0;
  //   }
  // }

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

  // // Convert the counter to a string and split it into an array of digits
  // const counterString = counterNumber.toString().split("");

  // counterString.forEach((item) => {
  //   const span = document.createElement("span");
  //   span.textContent = item;
  //   numberCounterDiv.appendChild(span);
  // });

  // // Check if the counter reaches 10k
  // if (counterNumber % 10000 === 0) {
  //   conflictAnimation.forEach((ele) => {
  //     // Toggle display between block and none
  //     ele.style.display = "block";
  //   });
  // }

  // // // Check if the counter reaches 11k
  // if (counterNumber % 11000 === 0) {
  //   console.log(counterNumber);
  //   conflictAnimation.forEach((ele) => {
  //     console.log(ele);
  //     if (ele.display === "block") {
  //       ele.style.display = "none";
  //     }
  //   });
  // }
}

window.addEventListener("load", function () {
  setInterval(counterTick, 4); // 600000
  // setInterval(counterTick, 1000); // 600000
});

// function countReaches(num) {
//   let count = 0;

//   for (let i = 1; i <= num; i++) {
//     if (i % 10000 === 0) {
//       count++;
//     }
//   }

//   return count;
// }

// const numReaches = countReaches(4609999);

// console.log("numReaches:",numReaches); // 10
