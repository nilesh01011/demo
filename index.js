// timer
const startingMinutes = 72000000;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

// counter div
const counterDiv = document.getElementById("counterDiv");

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

// ====================New Demo====================
// dates
// function dateUpdates() {
//   const dateFormatted = document.querySelector("#date");
//   const momentDates = moment().format("Do MMM YYYY, LT");

//   return (dateFormatted.innerHTML = momentDates);
// }

// dateUpdates();
// setInterval(dateUpdates, 1000);
