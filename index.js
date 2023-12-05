// timer

const startingMinutes = 72000000;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

// counter div
const counterDiv = document.getElementById("counterDiv");

const counterH1 = counterDiv.querySelectorAll("h1")

// setInterval(updateCountdown, 1000);

// function updateCountdown() {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   seconds = seconds < 10 ? "0" + seconds : seconds;

//   counterDiv.innerHTML = `${minutes} ${seconds}`;
//   time++;
// }

// =================================================

// const counterNumber = [
//   {
//     count: 7,
//   },
//   {
//     count: 2,
//   },
//   {
//     count: 0,
//   },
//   {
//     count: 0,
//   },
//   {
//     count: 0,
//   },
//   {
//     count: 0,
//   },
//   {
//     count: 0,
//   },
//   {
//     count: 0,
//   },
// ];

// counterNumber.forEach((item) => {
//   const h1 = document.createElement("h1");
//   h1.textContent = item.count;

//   counterDiv.appendChild(h1);
// });

counterH1.forEach((ele) => {
  if(ele.classList.contains("countUp")){
    // ele.textContent = 1
  }
})

// firstFour
const firstFourDiv = document.getElementById("firstFour");
const secondFourDiv = document.getElementById("secondFour");

const firstFour = [
  {
    count: 12000,
    text: "Actual",
  },
  {
    count: 11000,
    text: "Actual",
  },
  {
    count: 1000,
    text: "Actual",
  },
  {
    count: 18000,
    text: "Actual",
  },
];

const secondFour = [
  {
    count: 50000,
    text: "Plan",
  },
  {
    count: 90000,
    text: "Plan",
  },
  {
    count: 60000,
    text: "Plan",
  },
  {
    count: 20000,
    text: "Plan",
  },
];

// first four
firstFour.forEach((item) => {
  const p = document.createElement("p");
  p.textContent = item.count;
  const span = document.createElement("span");
  span.textContent = item.text;

  p.appendChild(span);

  firstFourDiv.appendChild(p);
});

// second four
secondFour.forEach((item) => {
  const p = document.createElement("p");
  p.textContent = item.count;
  const span = document.createElement("span");
  span.textContent = item.text;

  p.appendChild(span);

  secondFourDiv.appendChild(p);
});

// ========================================
// let exampleNumber = 72000;

// function incrementLastDigit() {
//   // Convert the number to a string to easily access individual digits
//   const numberString = exampleNumber.toString();

//   // Convert the string to an array of digits
//   const digitsArray = numberString.split('').map(Number);

//   // Increment the last digit by 1
//   digitsArray[digitsArray.length - 1] += 1;

//   // Join the array back into a string with spaces between the digits
//   const result = digitsArray.join(' ');

//   // Update the example number and log the result
//   exampleNumber = parseInt(result.replace(/\s/g, ''), 10);
//   console.log(result);
// }

// // Set up the interval to call the incrementLastDigit function every 1000 milliseconds (1 second)
// setInterval(incrementLastDigit, 1000);
