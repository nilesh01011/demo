const counterDiv = document.getElementById("counterDiv");

const counterNumber = [
  {
    count: 7,
  },
  {
    count: 2,
  },
  {
    count: 0,
  },
  {
    count: 0,
  },
  {
    count: 0,
  },
  {
    count: 0,
  },
  {
    count: 0,
  },
  {
    count: 0,
  },
];

counterNumber.forEach((item) => {
  const h1 = document.createElement("h1");
  h1.textContent = item.count;

  counterDiv.appendChild(h1);
});

// firstFour
const firstFourDiv = document.getElementById("firstFour");
const secondFourDiv = document.getElementById("secondFour");

const firstFour = [
    {
        count:12000,
        text:"Actual"
    },
    {
        count:11000,
        text:"Actual"
    },
    {
        count:1000,
        text:"Actual"
    },
    {
        count:18000,
        text:"Actual"
    },
]

const secondFour = [
    {
        count:50000,
        text:"Planned"
    },
    {
        count:90000,
        text:"Planned"
    },
    {
        count:60000,
        text:"Planned"
    },
    {
        count:20000,
        text:"Planned"
    },
]

// first four
firstFour.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = item.count;
    const span = document.createElement("span");
    span.textContent = item.text;

    p.appendChild(span);

    firstFourDiv.appendChild(p)
})

// second four
secondFour.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = item.count;
    const span = document.createElement("span");
    span.textContent = item.text;

    p.appendChild(span);

    secondFourDiv.appendChild(p)
})
